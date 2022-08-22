import React from "react";
import "./Navbar.css";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className="logo">
          <Link to="/">My Portfolio</Link>
        </Typography>
        <div className="menu-icon">
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </div>
        <div className="links">
          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/about">
            <Button color="inherit">About Me</Button>
          </Link>
          <Link to="/contact">
            <Button color="inherit">Contact Me</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
