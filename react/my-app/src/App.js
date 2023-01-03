import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./components/MainHeader";
import React, { Component } from "react";

function App() {
  function MainHeader() {
    return <h1>함수형 내부 정의</h1>;
  }

  return (
    <div className="App">
      <MainHeader />
    </div>
  );
}

export default App;
