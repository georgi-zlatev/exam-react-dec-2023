// Header.js

import {useContext} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import AuthContext from "../../contexts/authContexts";

export default function Header() {
  const { isAuthenticated, username } = useContext(AuthContext);


  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Local Food Events</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/locations" className="nav-link">Locations</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
            </ul>
          </div>

          {isAuthenticated && (
          <div id="user">
            <Link to="/locations/create">Create Location</Link>
            <Link to="/logout">Logout</Link>
            <span>|  Welcome, {username}</span>
          </div>
        )}

        {!isAuthenticated && (
          <div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
        </div>
      </nav>
    </header>
  );
}
