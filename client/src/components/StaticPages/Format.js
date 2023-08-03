import React from 'react';
import "./Rules.css";
import Navbar from './Navbar';
import footKick from "../../images/footkick.png";


const Format = () => {
    return (
        <div className="static_Main">
            <Navbar isTextShow={true} />
            <div className="static_body">
                <div class="h100per">
                    <div className="databody_header">Format:</div>
                    <div className="data_body">

                        <ul>
                            <li className="ruleHead">Teams - 104 Teams
                                <ul>
                                    <li>91 - new teams</li>
                                    <li>7 - Round of 16 participants from last year.</li>
                                    <li>6 - Quarter finalists from last year. </li>
                                </ul>
                            </li>
                            <li className="ruleHead">7 R16 participants 
                                <ul>
                                    <li>AppX FC</li>
                                    <li>Rolex FC</li>
                                    <li>Soona Paana FC</li>
                                    <li>Noobs (Formerly Warriors)</li>
                                    <li>Titans United (Formerly Titans)</li>
                                    <li>Raavanas</li>
                                    <li>Road Runners </li>
                                </ul>
                            </li>
                            <li className="ruleHead">6 quarter finalists from last year. 
                                <ul>
                                    <li>Munich United</li>
                                    <li>Wizards FC</li>
                                    <li>Zoho Heat FC</li>
                                    <li>Tea & Busquets</li>
                                    <li>Monsters FC (Formerly Log360)</li>
                                    <li>All Starts United FC</li>
                                </ul>
                            </li>
                            <li className="ruleHead">Stages
                                <ul>
                                    <li>Quarlifiers </li>
                                    <li>League</li>
                                    <li>Knockout</li>
                                    <li>Finals</li>
                                </ul>
                            </li>
                            <li className="ruleHead">Spot match. 
                                <ul>
                                    <li><span style={{fontFamily:"zoho_puviblack"}}>Thilliruntha Thothu Paru and Knight Hawks teams</span> will have a match. The winner will proceed to the next phase. </li>
                                    <li>We have this match as we got the entry late and can't shuffle all the schedule.</li>
                                </ul>
                            </li>
                            <li className="ruleHead">Qualifies
                                <ul>
                                    <li>Round 1 (QR1) - 90 new teams will play one knockout match. </li>
                                    <li>Round 2 (QR2) - 45 Winners from previous round + 7 R16 participants will play knockout. </li>
                                    <ul>
                                        <li>We have a total of 52 teams in this round. </li>
                                    </ul>
                                    <li>26 teams from R2 will be proceeding to the league. </li>
                                    <li>For any draw match, the winner will be decided based on penalty shoot-out. </li>
                                </ul>
                            </li>
                            <li className="ruleHead">League 
                                <ul>
                                    <li>We have 26 teams from Qualifiers and 6 Quarter finalists from last year makes total of 32 teams. </li>
                                    <li>32 teams will be split into 8 groups. </li>
                                    <li>Each team will play against each team in the group. </li>
                                    <li>Winner and Runner will proceed to the knockouts. </li>
                                    <li>6 quarter finalists will be seeded into six different groups based on lot. </li>
                                    <li>26 qualified will also be placed on lot. </li>
                                    <li>The Winning team will be awarded with 3 points. 1 point to each team in case of draw. </li>
                                    <li>The winner and runner will be decided based on points. </li>
                                    <li>If points are the same, it will be decided based on the goal difference. </li>
                                    <li>If both points and goal difference are the same, it will be decided based on penalty shoot-out. </li>
                                </ul>
                            </li>
                            <li className="ruleHead">Knockouts 
                                <ul>
                                    <li>Round of 16 (R16) - winners and runners from the league will play this stage. </li>
                                    <li>The winner of a group will play against the runner of some other group. It will be decided based on lot. </li>
                                    <li>Winners of this round will proceed to quarter-finals. </li>
                                    <li>For any draw match, the winner will be decided based on penalty shoot-out. </li>
                                </ul>
                            </li>
                            <li className="ruleHead">Finals 
                                <ul>
                                    <li>8 teams from previous will play quarter-finals (QF). </li>
                                    <li>4 Winners will proceed to Semi-Finals (SF). </li>
                                    <li>Winners of Semi-Finals will participate in Finals. </li>
                                    <li>For draw in quarter-finals, the winner will be decided based on penalty shoot-out</li>
                                    <li>For any draw in semi-finals and final, extra time of 5 minutes a half will be awarded. If there is a draw in extra timing, the winner will be decided based on penalty shoot-out. </li>
                                </ul>
                            </li>
                            <li className="ruleHead">Timings
                                <ul>
                                    <li>Spot Match: 7-3-7</li>
                                    <li>Qualifiers - R1: 7-3-7</li>
                                    <li>Qualifiers - R2: 10-3-10</li>
                                    <li>League: 10-3-10</li>
                                    <li>Knockouts: 15-5-15</li>
                                    <li>Quarter-Finals: 15-5-15</li>
                                    <li>Semi-Finals and Final: 20-5-20</li>
                                    <li>Extra Timing: 5-2-5</li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
                <div class="h100per">
                    <img src={footKick} alt="footkick" />
                </div>
            </div>
        </div>
    )
}

export default Format;