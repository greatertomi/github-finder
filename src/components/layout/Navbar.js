import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGift} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <FontAwesomeIcon icon={faGift} className="mr-2"/>
        {props.title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
