import React from 'react';
import Menu from '../Menu';
import './header.css';

const Header = (props) => {
  return (
    <div>
      <Menu/>
      <h1 className="ml-2">{props.title}</h1>
      
    </div>
  )
}

export default Header;
