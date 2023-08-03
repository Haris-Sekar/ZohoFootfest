import React from 'react'
import zohoLogo from "../../images/Zoho-logo.svg";
import cpLogo from "../../images/sp.svg";
import { Link } from "react-router-dom";

const Navbar = ({isZohoLogo}) => {
    return (
        <div className="static_subHeader">
            <div>
                <Link to="/" className='remove'><img src={isZohoLogo ? zohoLogo : cpLogo} alt="Zoho-logo" /></Link>
            </div>
            <div className="championsLeague_Container">
                <ul className="menu_header menu">
                    <li className="menu_list">
                        <Link to="/matchDates"> 
                            Match Dates 
                        </Link>
                    </li>
                    
                    <li className="menu_list dropdown mensNavPar">
                        <a href="">Men’s</a>
                        <ul class="dropdown-nav">
                            <li><Link to="/qualifiers">Qualifers</Link></li>
                            <li><Link to="/league">Leagues</Link></li>
                            <li><Link to="/rules">Knockout</Link></li>
                            <li><Link to="/formats">Rules</Link></li>
                            <li><Link to="/formats">Format</Link></li>
                        </ul>
                    </li>
                    <li className="menu_list dropdown womensNavPar">
                        <a href="">Women’s</a>
                        <ul class="dropdown-nav womensNav">
                            <li><Link to="/womens">Matches</Link></li>
                            <li><Link to="/womensRules">Rules</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar