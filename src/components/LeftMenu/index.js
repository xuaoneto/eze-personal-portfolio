import React from "react";

const LeftMenu = ({ state }) => {
  return (
    <div className={state ? "leftmenu-container active" : "leftmenu-container"}>
      <div></div>
    </div>
  );
};

export default LeftMenu;
