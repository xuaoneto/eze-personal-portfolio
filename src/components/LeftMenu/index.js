import React, { useState } from "react";
import rightarrowicon from "../../images/rightarrow.svg";

const LeftMenu = ({ state }) => {
  const [submenu, setSubMenu] = useState(false);

  const rightarrow = <img src={rightarrowicon} width="10" height="10" />;
  const internalmenu = [
    { name: "HOME", icon: rightarrow, active: true, submenu: false },
    { name: "PORTFÓLIO", icon: rightarrow, active: false, submenu: false },
    { name: "SERVIÇOS", icon: rightarrow, active: false, submenu: false },
    { name: "GITHUB", icon: rightarrow, active: false, submenu: false },
    { name: "REDES SOCIAIS", icon: rightarrow, active: false, submenu: true },
    // LINKEDIN, MEDIUM, INSTAGRAM, YOUTUBE, SOUNDCLOUD
    { name: "CONTATO", icon: rightarrow, active: false, submenu: false },
  ];
  const redes = [
    { name: "LINKEDIN", link: "#" },
    { name: "MEDIUM", link: "#" },
    { name: "INSTAGRAM", link: "#" },
    { name: "YOUTUBE", link: "#" },
    { name: "SOUNDCLOUD", link: "#" },
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
    if (id === "REDES SOCIAIS") {
      setSubMenu(!submenu);
    } else {
      setSubMenu(false);
    }
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
          return item.submenu ? (
            <div className="submenu-container">
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
              {submenu && (
                <div className="submenu-container">
                  {redes.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="menu-item sub"
                        id={`${item.name}-submenu`}
                      >
                        <a href={item.link}>
                          <p className="item-name">{item.name}</p>
                        </a>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
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
