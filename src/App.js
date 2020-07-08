import React, {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
// import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/about";
import User from "./components/users/User";
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    repos: []
  };

  /*async componentDidMount() {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/users?client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
    this.setState({users: res.data, loading: false});
  };*/

  searchUsers = async (text) => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
    this.setState({users: res.data.items, loading: false});
  };

  // Get a single user
  getUser = async (username) => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
    this.setState({user: res.data, loading: false});
  };

  // Get User Repos
  getUserRepos = async (username) => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc& 
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
    this.setState({repos: res.data, loading: false});
  };

  clearUsers = () => this.setState({users: [], loading: false});

  setAlert = (msg, type) => {
    this.setState({alert: {msg, type}});
    setTimeout(() => this.setState({alert: null}), 5000)
  };

  render() {
    const {loading, user, users, alert, repos} = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar title="Github Finder"/>
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0}
                    setAlert={this.setAlert}/>
                  <Users loading={loading} users={users}/>
                </Fragment>
              )}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/user/:login' render={props => (
                <User
                  {...props}
                  getUser={this.getUser}
                  user={user}
                  loading={loading}
                  repos={repos}
                  getUserRepos={this.getUserRepos}
                />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
