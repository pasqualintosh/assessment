import React from 'react';
import './header.css';

const Header = props => {
  return (
    <div className="header">
      {props.headerText && <h1>{props.headerText}</h1>}
      {props.children}
    </div>
  );
};

export default Header;
