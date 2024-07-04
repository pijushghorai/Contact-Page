import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Contactheader from "./components/Contactheader";
import Contactform from "./components/Contactform";

function App() {
  return (
    <>
      <Nav />
      <Contactheader/>
      <Contactform />
    </>
  );
}

export default App;
