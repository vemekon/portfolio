import React from "react";
import logo1 from "./pic/main.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="conatiner text-center top">
          <div className="img footer-logo">
            <img src={logo1} alt="" />
          </div>
          <p>© 2022. All rights reserved by Samuel Mekonen.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
