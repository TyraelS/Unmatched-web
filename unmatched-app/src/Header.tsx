import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Unmatched</h1>
      <Link to="/">Home</Link>
      <Link to="/game">Game</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Header;
