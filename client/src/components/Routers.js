import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChampionsLeague from "./Champions League/ChampionsLeague";
import Home from "./Home";
import League from "./League/League";
import Knockout from "./Knockout/Knockout";
import Womens from "./Womens/Womens";
import Rules from "./StaticPages/Rules";
import Matches from "./StaticPages/Matches";
const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/qualifiers/*" element={<ChampionsLeague />} />
          <Route path="/league/*" element={<League />} />
          <Route path="/knockout" element={<Knockout />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/matchDates" element={<Matches />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;