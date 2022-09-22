import React from "react";
import Header from "./components/Header/Header";
import appClass from "./app.module.scss";
import Footer from "./components/Footer/Footer";

function App() {
  return (
  <div className={appClass.wrapper}>
      <Header/>
      <h1 className={appClass.header}>Login to Friender</h1>

      <Footer/>
  
  </div>);
}

export default App;
