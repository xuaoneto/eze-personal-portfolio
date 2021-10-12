import React from "react";
import logo from "../../images/logo.svg";
import mediumicon from "../../images/medium.svg";
import linkedinicon from "../../images/linkedin.svg";
import instagramicon from "../../images/instagram.svg";
import { useState } from "react";
import LeftMenu from "../LeftMenu";

const SideMenu = () => {
  const [leftMenu, stateLeftMenu] = useState(false);
  const menuNav = () => {
    stateLeftMenu(!leftMenu);
    let bar1 = document.getElementsByClassName("bar1");
    let bar2 = document.getElementsByClassName("bar2");
    let bar3 = document.getElementsByClassName("bar3");
    let menu = document.getElementsByClassName("menu-button-text");
    if (leftMenu) {
      bar1[0].className = "bar1";
      bar2[0].className = "bar2";
      bar3[0].className = "bar3";
      menu[0].className = "menu-button-text";
    } else {
      bar1[0].className = "bar1 active";
      bar2[0].className = "bar2 active";
      bar3[0].className = "bar3 active";
      menu[0].className = "menu-button-text active";
    }
  };

  return (
    <div className="side-bar-menu">
      <div className="upper">
        <div className="logo">
          <img src={logo} width="30px" height="auto" />
        </div>
        <div
          className="nav-button"
          onClick={() => {
            menuNav();
          }}
        >
          <div className="spans-menu">
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </div>
          <p className="menu-button-text">Menu</p>
        </div>
      </div>
      <LeftMenu state={leftMenu} />
      <div className="socials">
        <a href="#">
          <div className="facebook-icon">
            <img src={mediumicon} width="24" height="24" />
          </div>
        </a>
        <a href="#">
          <div className="instagram-icon">
            <img src={linkedinicon} width="24" height="24" />
          </div>
        </a>
        <a href="#">
          <div className="linkedin-icon">
            <img src={instagramicon} width="24" height="24" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SideMenu;
