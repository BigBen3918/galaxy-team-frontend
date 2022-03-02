import React from "react";

import "./layout.scss";

import Routes from "../Routes";

import { BrowserRouter, Route } from "react-router-dom";
import useStore from "../../useStore";

import Facebook from "../../assets/images/facebook.png";
import Linkedin from "../../assets/images/linkedin.png";
import Twitter from "../../assets/images/twitter.png";
import Youtube from "../../assets/images/youtube.png";

const Layout = () => {
  const G = useStore();

  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className="layout">
            <div className="content">
              <Routes />
            </div>
            <div className="footer">
              <div>
                <img src={Facebook} alt="facebook" />
                <img src={Linkedin} alt="linkedin" />
                <img src={Twitter} alt="twitter" />
                <img src={Youtube} alt="youtube" />
              </div>
              <div>
                <span>
                  © 2022 Galaxy. Privacy Policy Terms and Conditions of Use
                </span>
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
