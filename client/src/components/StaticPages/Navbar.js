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
                    
                    <li className="menu_list dropdown">
                        <a href="">Men’s</a>
                        <ul class="dropdown-nav">
                            <Link to="/qualifiers"><li><a href="">Qualifers</a></li></Link><hr />
                            <Link to="/league"><li><a href="">Leagues</a></li></Link><hr />
                            <Link to="/knockout"><li><a href="">Knockout</a></li></Link><hr />
                            <Link to="/rules"><li><a href="">Rules</a></li></Link>
                            <Link to="/formats"><li><a href=''>Format</a></li></Link>
                        </ul>
                    </li>
                    <li className="menu_list dropdown">
                        <a href="">Women’s</a>
                        <ul class="dropdown-nav">
                            <Link to="/womens"><li><a href="">Matches</a></li></Link><hr />
                            <Link to="/womensRules"><li><a href="">Rules</a></li></Link>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar