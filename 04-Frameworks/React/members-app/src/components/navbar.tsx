import React from "react";
import { Link } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar-container">
      <h1 className="navbar-title">Options</h1>
      <Link className="navbar-item" to="/">
        Members list
      </Link>
      <Link className="navbar-item" to="/character">
        Rick and morty
      </Link>
    </div>
  );
};
