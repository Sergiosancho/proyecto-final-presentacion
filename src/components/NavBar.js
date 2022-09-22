import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <div className="navbar-left">
          <div>
            <img src="./images/serpiente.png" className="logo" alt="logo" />
          </div>

          <h1 className="navbar-title">COINFINDER</h1>
        </div>
      </Link>
      <nav className="navbar-nav">
        <ul className="navbar-nav-ul">
          <Link className="navbar-link" to="/">
            Home
          </Link>{' '}
          |<Link to="/trends">Trends</Link> |
          <Link className="navbar-link"  to="/newsfeed">
            News Feed
          </Link>
        </ul>
      </nav>
    </div>
  );
};
