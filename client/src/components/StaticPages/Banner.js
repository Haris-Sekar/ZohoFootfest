import React from 'react';
import footKick from "../../images/footkick.png";
import Navbar from './Navbar';


const Banner = () => {
    return (
        <div className="static_Main">
            <Navbar />
            <div className="coverMain">
                <div className="leaguesCover">
                    <div className="leaguesLeft">
                        <span className="ChampionsCompany">ZOHO</span>
                        <span className="ChampionsLeague">CHAMPIONS</span>
                        <span className="ChampionsLeague tournament">LEAGUE</span>
                        <div className="linedes"><span className="lengthLineExtra"></span><span className="lengthLine"></span><span className="lengthLineExtra"></span></div>
                        <span className="year">2023</span>
                    </div>
                    <div>
                        <img src={footKick} alt="footkick" />
                    </div>
                </div>
                <div className="footer">
                    <div className="footerBox">
                        <span className="footerContentques">Committee : </span>
                        <span className="footerContentans">sarath.rp@zohocorp.com</span>
                    </div>
                    <div className="footerBox">
                        <div className="footBoxOne">
                            <span className="footerContentques">Match Dates: </span>
                            <span className="footerContentques">Venue:</span>
                        </div>
                        <div className="footBoxTwo">
                            <span className="footerContentans">19, 20, 26 & 27August</span>
                            <span className="footerContentans">Woodlands Ground</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner