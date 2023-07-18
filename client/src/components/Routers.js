import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChampionsLeague from "./Champions League/ChampionsLeague";
import Home from "./Home";
import League from "./League/League";
const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/championsLeague/*" element={<ChampionsLeague />} />
          <Route path="/league/*" element={<League />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;