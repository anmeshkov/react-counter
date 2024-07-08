/* ----------------------------------------------------------------
  APP
---------------------------------------------------------------- */
import { Component } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import BtnGroup from "./components/ButtonsGroup";

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <BtnGroup />
    </div>
  );
}

export default App;
