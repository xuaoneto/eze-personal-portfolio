import React from "react";
import coding from "../../images/coding-pexels.jpeg";
import emailicon from "../../images/email.svg";

const Header = () => {
  return (
    <div className="image-container">
      <div className="email" href="#">
        <img src={emailicon} width="18" height="18" />
      </div>
      <img className="image-pexels" src={coding} />
    </div>
  );
};

export default Header;
