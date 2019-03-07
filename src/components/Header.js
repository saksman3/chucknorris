import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="page-header">
        <div className="logo">
          <Link to="/">Chuck Norris</Link>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
