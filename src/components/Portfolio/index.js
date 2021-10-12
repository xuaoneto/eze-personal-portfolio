import React from "react";
import Background from "../Background";
import TrainsAnimation from "../Background/TrainsAnimation";

const Portfolio = () => {
  return (
    <div className="portfolio-part">
      <div className="container-background">
        <TrainsAnimation />
        <Background />
        <Background />
        <Background />
        <Background />
      </div>
    </div>
  );
};

export default Portfolio;
