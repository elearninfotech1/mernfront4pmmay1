import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Routing from "./Routing";
const App = () => {
  return (
    <div>
      <Header />
      <Routing />
      <Footer />
    </div>
  );
};

export default App;
