import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";

const App = () => {
  return <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element/>
    </Routes>
    </BrowserRouter>
    </>;
};

export default App;
