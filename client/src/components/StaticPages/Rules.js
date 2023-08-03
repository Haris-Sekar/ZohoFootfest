import React from 'react';
import "./Rules.css";
import Navbar from './Navbar';
import footKick from "../../images/footkick.png";


const Rules = () => {
    return (
        <div className="static_Main">
            <Navbar isTextShow={true} />
            <div className="static_body">
                <div>
                    <span className="databody_header">Rules:</span>
                    <div className="data_body">

                        <ol>
                            <li className="ruleHead">1. Players
                                <ol>
                                    <li>Field Players: four field players and one goalie. Minimum of 4 players required
                                        including the keeper to start the game.</li>
                                    <li>The roster size may not exceed 8 players</li>
                                    <li>A player can play for only one team. Playing for two teams will result in
                                        disqualification for both the teams.</li>
                                    <li>Playing an ineligible player may result in a 3-0 loss.</li>
                                </ol>
                            </li>
                            <li className="ruleHead">2. Substitutions
                                <ol>
                                    <li>There is no limit for substitution.</li>
                                    <li>Substitution method: “flying substitution” - Players can substitute after notifying
                                        the referee and he/she prevents the game from restarting. Players must always leave and
                                        enter the pitch from the same place.</li>
                                    <li>Substitutions can be made any time the ball is out of bounds, between periods,
                                        after a goal is scored or during a timeout for an injury</li>
                                    <li>Advantageous subbing will result in a YELLOW CARD.</li>

                                </ol>
                            </li>
                            <li className="ruleHead">3. Equipment
                                <ol>
                                    <li>Only turf shoes and flats shoes are allowed</li>
                                    <li>Players can wear track pants.</li>
                                </ol>
                            </li>
                            <li className="ruleHead">4. Start of Play
                                <ol>
                                    <li>A ball must be kicked forward from the center spot before being touched by
                                        another player.</li>
                                    <li>A goal can be scored directly from a kick of</li>
                                    <li>Opposing team waits outside center circle until the ball has been played.</li>
                                    <li>Ensuing kick-offs taken after goals scored and at start of second half.</li>
                                </ol>
                            </li>
                            <li className="ruleHead">5. Ball in and out of play
                                <ol>
                                    <li>Ball is out of play when it is crossed the touchline or goal line. On the line will be
                                        considered as inside.</li>
                                    <li>Ball over the end line results in a goal kick or a corner kick. Ball over the sideline
                                        results in a kick in.</li>
                                    <li>A goal cannot be scored directly from a kick in.</li>
                                </ol>
                            </li>
                            <li className="ruleHead">6. Goal Keeper
                                <ol>
                                    <li>The The pass back law will apply.</li>
                                    <li>If a pass back occurs, a direct free kick is to be awarded to the opposition on the
                                        edge of the Penalty area nearest to the point where the Goalkeeper handled the ball.</li>
                                    <li>Goal kicks must be taken from inside the “D” area, by any player. The ball must be
                                        kicked from the ground, not thrown.</li>
                                    <li>The goalkeeper can pick the ball up anywhere inside the “D” penalty area. The ball
                                        must be distributed by a throw, normal place kick or kick from a dribble. Drop-kicks are not
                                        permitted. A corner kick will be awarded to the opposing team if a keeper punts or dropkicks the ball.</li>
                                </ol>
                            </li>
                            <li className="ruleHead">7. Goal Keeper
                                <ol>
                                    <li>The The pass back law will apply.</li>
                                    <li>If a pass back occurs, a direct free kick is to be awarded to the opposition on the
                                        edge of the Penalty area nearest to the point where the Goalkeeper handled the ball.</li>
                                    <li>Goal kicks must be taken from inside the “D” area, by any player. The ball must be
                                        kicked from the ground, not thrown.</li>
                                    <li>The goalkeeper can pick the ball up anywhere inside the “D” penalty area. The ball
                                        must be distributed by a throw, normal place kick or kick from a dribble. Drop-kicks are not
                                        permitted. A corner kick will be awarded to the opposing team if a keeper punts or dropkicks the ball.</li>
                                </ol>
                            </li>
                            <li className="ruleHead">8. Foul Play & Cards
                                <ol>
                                    <li>Any player sent off for “Violent Conduct” will be banned from the rest of the
                                        competition.</li>
                                    <li>Players sent off for “Abusive, Insulting or Offensive Language” or “Serious Foul
                                        Play” cannot be replaced for the remainder of the match and receive an automatic onematch suspension to be served during their team’s next scheduled match.</li>
                                    <li>The Organizing Committee reserves the right to extend periods of suspension as
                                        it deems appropriate in each circumstance.</li>
                                    <li>YELLOW - Two yellows in a game = RED; Three yellows during the tournament = 1
                                        Game Suspension.</li>
                                    <li>RED - Ejection without replacement and 1 game suspension.</li>
                                    <li>YELLOW for Intentional foul, Pulling shirt, Tackling from behind, Obvious
                                        intentional handball, Dissent, and Blocking a restart of play.</li>
                                    <li>RED - Swearing at ref, Denying a goal scoring opportunity with a foul, Spitting,
                                        Threatening to fight, and Fighting.</li>
                                </ol>
                            </li>
                            <li className="ruleHead">9. Penalty Kicks
                                <ol>
                                    <li>The penalty kick is taken from the penalty spot.</li>
                                    <li>One Step: The player taking the penalty kick is allowed to take only one step
                                        before striking the ball. This means they must quickly approach the ball and kick it within a
                                        short distance. (Sample Video)</li>
                                    <li>Goalkeeper Positioning: The goalkeeper must remain on the goal line until the ball
                                        is struck. They are not allowed to move forward or attempt to distract the penalty taker
                                        until the ball is in motion..</li>
                                </ol>
                            </li>
                            <li className="ruleHead">10. Teams
                                <ol>
                                    <li>Teams are requested to report before 30 mins of the match and verify your team
                                        members.</li>
                                    <li>Verification failure will be considered as walk-out.</li>
                                </ol>
                            </li>
                            <li className="ruleHead">11. Format
                                <ol>
                                    <li>The 7 teams will be split into two groups (4 + 3) named A and B respectively,
                                        based on lot.</li>
                                    <li>Each team will play against every other team in the group (League Format).</li>
                                    <li>In league matches, the Winning team will be awarded with 3 points. 1 point to
                                        each team in case of draw.</li>
                                    <li>Winner and Runners from each group will proceed to Semi-Finals. In case of
                                        points draw, winners and runners will be decided based on the goal difference.</li>
                                    <li>Winners of Semi-Finals will proceed to finals</li>
                                    <li>In case of draw in Semi-Finals and Finals, winner will be decided based on the
                                        penalty-shoot out.</li>
                                    <li>Penalty-shoot out: Each team will be awarded with 5 penalty kicks. The team will
                                        highest points will be considered as the winner.</li>
                                </ol>
                            </li>
                            <li className="ruleHead">12. Duration
                                <ol>
                                    <li>Duration for league match is 7-3-7 i.e. a half will be 7 mins and 3 mins break inbetween halves.</li>
                                    <li>For Semi-Finals and Finals, it will be 15-5-15.</li>
                                </ol>
                            </li>
                        </ol>

                    </div>
                </div>
                <div>
                    <img src={footKick} alt="footkick" />
                </div>
            </div>
        </div>
    )
}

export default Rules;