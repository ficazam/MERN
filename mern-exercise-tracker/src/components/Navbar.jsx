import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg px-5">
      <Link to="/" className="navbar-brand">
        ExcerTracker
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Exercises
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Add Exercise Log
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/user" className="nav-link">
              Create New User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
