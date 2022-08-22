import { IconButton } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <IconButton
          color="inherit"
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100019935393844"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="inherit"
          target="_blank"
          href="https://twitter.com/AhmedElsehraw14"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="inherit"
          target="_blank"
          href="https://www.instagram.com/sehrawy_/"
        >
          <InstagramIcon />
        </IconButton>
      </div>
      <div className="copy-right">
        &copy; 2020 <span style={{ color: "#3f51b5" }}>Ahmed Elsehrawy</span>
      </div>
    </div>
  );
};

export default Footer;
