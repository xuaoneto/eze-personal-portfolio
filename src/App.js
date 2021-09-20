import React from "react";
import SideMenu from "./components/SideMenu";
import "./styles/style.scss";
import CenterApresentation from "./components/CenterApresentation";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <SideMenu />
      <CenterApresentation />
    </>
  );
};

export default App;
