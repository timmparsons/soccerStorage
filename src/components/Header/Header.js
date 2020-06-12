import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav className="header__navigation">
      <div></div>
      <div className="header__logo">
        <a href="/">LOGO</a>
      </div>
      <div className="spacer"></div>
      <div className="header__navigation-items">
        <ul>
          <li><a href="/">Log In</a></li>
          <li><a href="/">Sign Up</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Header;