import React, { Component } from 'react';
import Routes from "./routes";
import Header from "../src/componente/Header/Header.js";
import "../src/index.css";
import Main from './pages/main/Main.js';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;

