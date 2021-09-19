import React from "react";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import rightarrow from "../../images/rightarrow.svg";

const InsertSVG = ({ name, width = "10", height = "10" }) => {
  const facebookicon = <img src={facebook} width={width} height={height} />;
  const instagramicon = <img src={instagram} width={width} height={height} />;
  const linkedinicon = <img src={linkedin} width={width} height={height} />;
  const rightarrowicon = <img src={rightarrow} width={width} height={height} />;

  const icons = [
    { icon: facebookicon, name: "facebookicon" },
    { icon: instagramicon, name: "instagramicon" },
    { icon: linkedinicon, name: "linkedinicon" },
    { icon: rightarrowicon, name: "rightarrowicon" },
  ];

  const icon = icons.find((icons) => icons.name === name);

  return icon.icon;
};

export default InsertSVG;
