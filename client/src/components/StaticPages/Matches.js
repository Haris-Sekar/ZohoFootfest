import React from "react";
import Navbar from "./Navbar";
import footKick from "../../images/footkick.png";

const Matches = () => {
  return (
    <div className="static_Main">
      <Navbar />
      <div className="static_body">
        <div class="h100per">
          <div className="databody_header">Match Dates:</div>
          <div className="data_body">
            <div className="matchData">
              <div className="matchDateConatiner">
                <div className="date">19 August 2023</div>
                <div className="matchList">
                  <ul>
                    <li>Men’s qualifiers 1</li>
                    <li>Women’s League</li>
                  </ul>
                </div>
              </div>
              <div className="matchDateConatiner">
                <div className="date">20 August 2023</div>
                <div className="matchList">
                  <ul>
                    <li>Men’s qualifiers 1 & 2 </li>
                    <li>Men’s League</li>
                  </ul>
                </div>
              </div>
              <div className="matchDateConatiner">
                <div className="date">26 August 2023</div>
                <div className="matchList">
                  <ul>
                    <li>Men’s League</li>
                  </ul>
                </div>
              </div>
              <div className="matchDateConatiner">
                <div className="date">27 August 2023</div>
                <div className="matchList">
                  <ul>
                    <li>Women’s Semifinals & Finals</li>
                    <li>Men’s RO16</li>
                    <li>Quarter Finals</li>
                    <li>Semifinals</li>
                    <li>Finals </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h100per">
          <img src={footKick} alt="footkick" />
        </div>
      </div>
    </div>
  );
};

export default Matches;
