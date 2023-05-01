import React from "react";

import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import Footer from "./containers/Footer/Footer";

import "./App.css";
import Background from "./components/Background/Background";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />

      <Background />
    </div>
  );
}

export default App;
