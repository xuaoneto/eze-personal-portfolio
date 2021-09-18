import React from "react";
import InsertSVG from "../InsertSVG";
import { useState } from "react";
import LeftMenu from "../LeftMenu";

const SideMenu = () => {
  const [leftMenu, stateLeftMenu] = useState(false);
  const menuNav = () => {
    stateLeftMenu(!leftMenu);
    let bar1 = document.getElementsByClassName("bar1");
    let bar2 = document.getElementsByClassName("bar2");
    let bar3 = document.getElementsByClassName("bar3");
    if (leftMenu) {
      bar1[0].className = "bar1";
      bar2[0].className = "bar2";
      bar3[0].className = "bar3";
    } else {
      bar1[0].className = "bar1 active";
      bar2[0].className = "bar2 active";
      bar3[0].className = "bar3 active";
    }
  };

  return (
    <div className="side-bar-menu">
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
      <LeftMenu state={leftMenu} />
      <div className="socials">
        <div className="facebook-icon">
          <InsertSVG name="facebookicon" width="24" height="24" />
        </div>
        <div className="instagram-icon">
          <InsertSVG name="linkedinicon" width="24" height="24" />
        </div>
        <div className="linkedin-icon">
          <InsertSVG name="instagramicon" width="24" height="24" />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
