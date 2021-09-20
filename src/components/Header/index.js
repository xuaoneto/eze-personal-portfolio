import React from "react";
import coding from "../../images/coding-pexels.jpeg";
import InsertSVG from "../InsertSVG";

const Header = () => {
  return (
    <div className="image-container">
      <div className="email" href="#">
        <InsertSVG name="emailicon" width="18" height="18" />
      </div>
      <img className="image-pexels" src={coding} />
    </div>
  );
};

export default Header;
