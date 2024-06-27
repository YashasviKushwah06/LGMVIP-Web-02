import React from 'react';
import "../App.css";

const NavBar = ({ onGetUsers }) => {
  return (
    <div className='navbar'>
      <div className='logo'>Let's <span>Grow More</span></div>
      <div className='nav-items'>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>User</a>
        <a href='#'>Contact</a>
        <a href='#'>Settings</a>
        <button className='nav-btn' onClick={onGetUsers}>Get Users</button>
      </div>
    </div>
  );
};

export default NavBar;
