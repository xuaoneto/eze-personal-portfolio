import React from "react";
import SideMenu from "./components/SideMenu";
import "./styles/style.scss";
import CenterApresentation from "./components/CenterApresentation";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Portfolio from "./components/Portfolio";
import TrainsAnimation from "./components/Background/TrainsAnimation";

const App = () => {
  return (
    <>
      <Header />
      <SideMenu />
      <CenterApresentation />
      <MenuBar />
      <Portfolio />
    </>
  );
};

export default App;
