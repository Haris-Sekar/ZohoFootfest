import React from 'react'
import zohoLogo from "../../images/Zoho-logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="static_subHeader">
            <div>
                <Link to="/" ><img src={zohoLogo} alt="Zoho-logo" /></Link>
            </div>
            <div className="championsLeague_Container">
                <ul className="menu_header menu">
                    <Link to="/matchDates"><li className="menu_list">
                        <a href="">
                            Match Dates
                            <svg class="icon" width="14" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" /></svg>
                        </a>
                    </li>
                    </Link>
                    <li className="menu_list dropdown">
                        <a href="">Men’s</a>
                        <ul class="dropdown-nav">
                            <Link to="/qualifiers"><li><a href="">Qualifers</a></li></Link><hr />
                            <Link to="/league"><li><a href="">Leagues</a></li></Link><hr />
                            <Link to="/knockout"><li><a href="">Knockout</a></li></Link><hr />
                            <Link to="/rules"><li><a href="">Rules</a></li></Link>
                        </ul>
                    </li>
                    <li className="menu_list dropdown">
                        <a href="">Women’s</a>
                        <ul class="dropdown-nav">
                            <Link to="/womens"><li><a href="">Matches</a></li></Link><hr />
                            <Link to="/rules"><li><a href="">Rules</a></li></Link>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar