import React, { useEffect, useState } from "react";
import rightarrowicon from "../../images/rightarrow.svg";

const LeftMenu = ({ state }) => {
  const [submenu, setSubMenu] = useState(false);

  const internalmenu = [
    { name: "HOME", active: true, submenu: false },
    { name: "PORTFÓLIO", active: false, submenu: false },
    { name: "SERVIÇOS", active: false, submenu: false },
    { name: "GITHUB", active: false, submenu: false },
    { name: "REDES SOCIAIS", active: false, submenu: true },
    { name: "CONTATO", active: false, submenu: false },
  ];
  const redes = [
    { name: "LINKEDIN", link: "#" },
    { name: "MEDIUM", link: "#" },
    { name: "INSTAGRAM", link: "#" },
    { name: "YOUTUBE", link: "#" },
    { name: "SOUNDCLOUD", link: "#" },
  ];
  // Setar item ativo
  const ActiveItem = (id) => {
    internalmenu.map((item, index) => {
      let active = document.getElementsByClassName("item-name");
      if (item.name === id) {
        active[index].className = "item-name active";
      } else {
        active[index].className = "item-name";
        console.log(active[index]);
      }
    });
    if (id === "REDES SOCIAIS") {
      setSubMenu(!submenu);
    } else {
      setSubMenu(false);
    }
  };
  //setSubmenu redes sociais
  useEffect(() => {
    if (submenu) {
      document.getElementsByClassName("submenu-container")[0].className =
        "submenu-container active";
    } else {
      document.getElementsByClassName("submenu-container")[0].className =
        "submenu-container";
    }
  }, [submenu]);
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
            <React.Fragment key={index}>
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
                <img src={rightarrowicon} width="10" height="10" />
              </div>
              <div className="submenu-container">
                {redes.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="menu-item sub"
                      id={`${item.name}-submenu`}
                    >
                      <a href={item.link}>
                        <p className="social">{item.name}</p>
                      </a>
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
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
              <img src={rightarrowicon} width="10" height="10" />
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
