import React from "react";
import "./navbar.css";

export const navbar = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Document</title>
      <link rel="stylesheet" href="navbar.css" />
      <nav>
        <ul className="menu">
          <li className="logo">
            <a href="#">FollowAndrew.dev</a>
          </li>
          <li className="item">
            <a href="#">Home</a>
          </li>
          <li className="item">
            <a href="#">About</a>
          </li>
          <li className="item">
            <a href="#">Services</a>
          </li>
          <li className="item button">
            <a href="./signup">Log In</a>
          </li>
          <li className="item button secondary">
            <a href="./signup">Sign Up</a>
          </li>
          <li className="toggle">
            <span className="bars" />
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default navbar;
