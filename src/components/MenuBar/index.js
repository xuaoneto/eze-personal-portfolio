import React, { useEffect, useState } from "react";
import ScrollDown from "../ScrollDown";

const MenuBar = () => {
  let state = true;

  const internalmenu = [
    { name: "HOME", active: true },
    { name: "PORTFOLIO", active: false },
    { name: "SERVICES", active: false },
    { name: "CONTACTS", active: false },
    { name: "BLOG", active: false },
    { name: "PAGES", active: false },
  ];

  const ActiveItem = (id) => {
    internalmenu.map((item, index) => {
      let active = document.getElementsByClassName("item-name1");
      let bar = document.getElementsByClassName("bar");
      if (item.name === id) {
        active[index].className = "item-name1 active";
        bar[index].className = "bar active";
      } else {
        active[index].className = "item-name1";
        bar[index].className = "bar";
      }
    });
  };
  let navbar;
  let sticky;
  window.onscroll = () => {
    if (state) {
      navbar = document.getElementsByClassName("menubar-container")[0];
      sticky = navbar.offsetTop;
      state = false;
    }

    function stickySwitch() {
      if (window.pageYOffset >= sticky) {
        navbar.className = "menubar-container sticky";
      } else {
        navbar.className = "menubar-container";
      }
    }
    stickySwitch();
  };

  return (
    <div className="menubar-container">
      <div className="scroll-container">
        <ScrollDown />
      </div>
      <div className="menu-itens">
        {internalmenu.map((item, index) => {
          return (
            <div
              className="item"
              id={`${item.name}-menu`}
              onClick={() => {
                ActiveItem(item.name);
              }}
              key={index}
            >
              <div className={item.active ? "bar active" : "bar"} />
              <p className={item.active ? "item-name1 active" : "item-name1"}>
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
      <div className="final"></div>
    </div>
  );
};

export default MenuBar;
