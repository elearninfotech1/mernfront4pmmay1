import React from "react";
import footerstyles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={footerstyles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p> 👺 Elearn Infotech</p>
          </div>
          <div className="col-md-6">
            <p className="float-end">Designed by Elearn Infotech</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
