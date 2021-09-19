import React from "react";
import InsertSVG from "../InsertSVG";

const LeftMenu = ({ state }) => {
  const rightarrow = <InsertSVG name="rightarrowicon" />;
  const internalmenu = [
    { name: "HOME", icon: rightarrow },
    { name: "PORTFOLIO", icon: rightarrow },
    { name: "SERVICES", icon: rightarrow },
    { name: "CONTACTS", icon: rightarrow },
    { name: "BLOG", icon: rightarrow },
    { name: "PAGES", icon: rightarrow },
  ];

  const ActiveItem = (id) => {
    internalmenu.map((item, index) => {
      let active = document.getElementsByClassName("item-name");
      if (item.name === id) {
        active[index].className = "item-name active";
      } else {
        active[index].className = "item-name";
      }
    });
  };

  return (
    <div className={state ? "leftmenu-container active" : "leftmenu-container"}>
      <div className="pesonal-name">
        <a className="name" href="#">
          Ezequias
        </a>
        <div className="hovered"></div>
      </div>
      <div className="internalmenu-container">
        {internalmenu.map((item) => {
          return (
            <div
              className="menu-item"
              id={`${item.name}-menu`}
              onClick={() => {
                ActiveItem(item.name);
              }}
            >
              <div className="hovered"></div>
              <p className="item-name">{item.name}</p>
              {rightarrow}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftMenu;
