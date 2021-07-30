import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = props => {
  return (
    <div className="header">
      {props.headerText && (
        <h1>
          <Link to="/">{props.headerText}</Link>
        </h1>
      )}
      {props.children}
    </div>
  );
};

export default Header;
