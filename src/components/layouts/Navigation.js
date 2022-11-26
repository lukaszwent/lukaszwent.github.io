import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <div className={classes.brandname}>
          <NavLink to="/">lukaszwent.github.io</NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/lukaszwent"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <NavLink to="/#contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
