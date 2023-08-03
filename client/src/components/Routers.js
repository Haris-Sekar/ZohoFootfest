import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChampionsLeague from "./Champions League/ChampionsLeague";
import Home from "./Home";
import League from "./League/League";
import Knockout from "./Knockout/Knockout";
import Womens from "./Womens/Womens";
import Rules from "./StaticPages/Rules";
import Matches from "./StaticPages/Matches";
import Format from "./StaticPages/Format";
import WomensRules from "./StaticPages/WomensRules";
const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/qualifiers" exact element={<ChampionsLeague />} />
          <Route path="/league" exact element={<League />} />
          <Route path="/knockout" exact element={<Knockout />} />
          <Route path="/womens" exact element={<Womens />} />
          <Route path="/rules" exact element={<Rules/>} />
          <Route path="/womensRules" exact element={<WomensRules />} />
          <Route path="/matchDates" exact element={<Matches />} />
          <Route path="/formats" exact element={<Format />} />
          <Route path="/" element={<Home />} /> 
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;