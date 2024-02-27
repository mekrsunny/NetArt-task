import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoIosGlobe } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="info">
        <div className="icon">
          <IoIosCall />
        </div>
        <h5>Toll free: 1800 200 1234</h5>
      </div>
      <div className="info">
        <FaFacebook />
        <h5>www.facebook.com/cripumps</h5>
      </div>
      <div className="info">
        <IoIosGlobe />
        <h5>www.crigroups.com</h5>
      </div>
    </div>
  );
};

export default Footer;
