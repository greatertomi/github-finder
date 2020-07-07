import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGift} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

class Navbar extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <FontAwesomeIcon icon={faGift} className="mr-2"/>
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
