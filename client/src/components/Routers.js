import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChampionsLeague from "./Champions League/ChampionsLeague";
import Home from "./Home";
const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/championsLeague/*" element={<ChampionsLeague />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;