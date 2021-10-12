import React from "react";
import rightarrowicon from "../../images/rightarrow.svg";

const LeftMenu = ({ state }) => {
  const rightarrow = <img src={rightarrowicon} width="10" height="10" />;
  const internalmenu = [
    { name: "HOME", icon: rightarrow, active: true },
    { name: "PORTFOLIO", icon: rightarrow, active: false },
    { name: "SERVICES", icon: rightarrow, active: false },
    { name: "CONTACTS", icon: rightarrow, active: false },
    { name: "BLOG", icon: rightarrow, active: false },
    { name: "PAGES", icon: rightarrow, active: false },
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
        {internalmenu.map((item, index) => {
          return (
            <div
              key={index}
              className="menu-item"
              id={`${item.name}-menu`}
              onClick={() => {
                ActiveItem(item.name);
              }}
            >
              <div className="hovered"></div>
              <p className={item.active ? "item-name active" : "item-name"}>
                {item.name}
              </p>
              {rightarrow}
            </div>
          );
        })}
      </div>
      <div className="bottom-block" />
      <div className="menu-name">
        <h1 className="big-menu">MENU</h1>
      </div>
    </div>
  );
};

export default LeftMenu;
