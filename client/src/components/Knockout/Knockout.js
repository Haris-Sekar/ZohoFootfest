import React, { useEffect } from "react";
import ChampionsLeagueTrophy from "../../images/champions-league-trophy.png";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../action/team";
import Navbar from "../StaticPages/Navbar";
import { Backdrop, CircularProgress } from "@mui/material";
import { formatDate } from "../../constants/commonFunction";

const Knockout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getMatches("ro16"));
        dispatch(actions.getMatches("qf"));
        dispatch(actions.getMatches("sf"));
        dispatch(actions.getMatches("f"));
    },[dispatch]);

    const {matches, isLoading} = useSelector(
        (state) => state.teamReducer
    ); 
    const tempData = {
        rightBracket: {
            RO16: [
                {
                    team1: {
                        name: "Team1",
                        score: 1,
                    },
                    team2: {
                        name: "Team2",
                        score: 2,
                    },
                },
                {
                    team1: {
                        name: "Team3",
                        score: 1,
                    },
                    team2: {
                        name: "Team4",
                        score: 2,
                    },
                },
                {
                    team1: {
                        name: "Team5",
                        score: 3,
                    },
                    team2: {
                        name: "Team6",
                        score: 2,
                    },
                },
                {
                    team1: {
                        name: "Team7",
                        score: 1,
                    },
                    team2: {
                        name: "Team8",
                        score: 2,
                    },
                },
            ],
            quarters: [
                {
                    team1: {
                        name: "Team1",
                        score: 1,
                    },
                    team2: {
                        name: "Team2",
                        score: 2,
                    },
                },
                {
                    team1: {
                        name: "Team3",
                        score: 1,
                    },
                    team2: {
                        name: "Team4",
                        score: 2,
                    },
                },
            ],
            semis: [
                {
                    team1: {
                        name: "Team5",
                        score: 1,
                    },
                    team2: {
                        name: "Team6",
                        score: 2,
                    },
                },
            ],
        },
        leftBracket: {
            RO16: [
                {
                    team1: {
                        name: "Team9",
                        score: 1,
                    },
                    team2: {
                        name: "Team10",
                        score: 2,
                    },
                },
                {
                    team1: {
                        name: "Team11",
                        score: 1,
                    },
                    team2: {
                        name: "Team12",
                        score: 2,
                    },
                },
                {
                    team1: {
                        name: "Team13",
                        score: 1,
                    },
                    team2: {
                        name: "Team14",
                        score: 2,
                    },
                },
                {
                    team1: {
                        name: "Team15",
                        score: 1,
                    },
                    team2: {
                        name: "Team16",
                        score: 2,
                    },
                },
            ],
            quarters: [
                {
                    team1: {
                        name: "Team5",
                        score: 1,
                    },
                    team2: {
                        name: "Team6",
                        score: 2,
                    },
                },
                {
                    team1: {
                        name: "Team7",
                        score: 1,
                    },
                    team2: {
                        name: "Team8",
                        score: 2,
                    },
                },
            ],
            semis: [
                {
                    team1: {
                        name: "Team5",
                        score: 1,
                    },
                    team2: {
                        name: "Team6",
                        score: 2,
                    },
                },
            ],
        },
        final: {
            team1: {
                name: "Team5",
                score: 1,
            },
            team2: {
                name: "Team6",
                score: 2,
            },
        },
        thirdPlace: {
            team1: {
                name: "Team5",
                score: 1,
            },
            team2: {
                name: "Team6",
                score: 2,
            },
        },
    };
    const parseData = (data) => {
        let leftBracket = {};
        let rightBracket = {};
        const RO16 = parseDataToComp(data.ro16);
        const qualifiers = parseDataToComp(data.qf);
        const semis = parseDataToComp(data.sf); 
        leftBracket.RO16 = RO16.slice(0, 4);
        rightBracket.RO16 = RO16.splice(4,12); 
        leftBracket.quarters = qualifiers.splice(0,2); 
        rightBracket.quarters = qualifiers;
        leftBracket.semis = [semis[0]];
        rightBracket.semis = [semis[1]];
        const finals = parseDataToComp(data.f);
        const parsedData = {
            leftBracket:rightBracket, rightBracket:leftBracket, final:finals[0]
        }
        return parsedData;
    };


    const parseDataToComp = (data) => {
        const matches = data.matches;
        let finalData = [];
        for (const match of matches) {
            const team1Name = match.team1.name;
            const team2Name = match.team2.name;

            const team1Score = match.team1.penalty_goals !== undefined && match.team1.goals !== undefined ? match.team1.penalty_goals + match.team1.goals : 0;
            const team2Score = match.team2.penalty_goals !== undefined && match.team2.goals !== undefined ? match.team2.penalty_goals + match.team2.goals : 0;

            const matchData = {
                hashTag: match.name,
                team1: {
                    name: team1Name,
                    score: team1Score,
                },
                team2: {
                    name: team2Name,
                    score: team2Score,
                },
                schedule: match.schedule
            };
            finalData.push(matchData);
        }
        return finalData;
    }

    let data = tempData;

    if(Object.keys(matches).length > 3) {
        data = parseData(matches); 
        console.log(data);
        
    }

    return (
        <>
            <Navbar />
            
            <div className="container" style={{position:'relative'}}>
            <div className="pageTitle">
                Zoho
                <br /> Champions League
            </div>
            <Backdrop
          sx={{ color: '#fff', position: 'absolute' }}
          open={isLoading}
          
        >
          <CircularProgress color="inherit" />
        </Backdrop>
                <div className="leagueTitle">
                    <span>Knockout</span>
                </div>
                {!isLoading ?  <div className="qualifiers-main">
                    <div className="knockout-left-bracket">
                        <div className="ro16-left-bracket">
                            {data.rightBracket.RO16.map((match, index) => {
                                return (
                                    <div
                                        className={`qualifiers-match ${index % 2 === 0 ? "top-left-arrow" : "bottom-left-arrow"
                                            }`}
                                    >
                                        <span className="qualifiers-match-header"><span style={{fontFamily: "zoho_puviblack"}}>{match.hashTag}</span> | {formatDate(match?.schedule?.date)} | {match?.schedule?.from} - {match?.schedule?.to}</span>
                                        <div
                                            className={`qualifiers-team1 ${match.team1.score > match.team2.score
                                                    ? "qualifiers-match-winner"
                                                    : ""
                                                }`}
                                        >
                                            <span>{match.team1.name}</span>
                                            <span className="qualifytime">{match.team1.score}</span>
                                        </div>
                                        <div
                                            className={`qualifiers-team2 ${match.team2.score > match.team1.score
                                                    ? "qualifiers-match-winner"
                                                    : ""
                                                }`}
                                        >
                                            <span>{match.team2.name}</span>
                                            <span className="qualifytime">{match.team2.score}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="quarters-left-bracket">
                            {data.rightBracket.quarters.map((match, index) => {
                                return (
                                    <div
                                        className={`qualifiers-match ${index % 2 === 0
                                                ? "quarters-top-left-arrow"
                                                : "quarters-bottom-left-arrow"
                                            }`}
                                    >
                                        <span className="qualifiers-match-header"><span style={{fontFamily: "zoho_puviblack"}}>{match.hashTag}</span> | {formatDate(match?.schedule?.date)} | {match?.schedule?.from} - {match?.schedule?.to}</span>
                                        <div
                                            className={`qualifiers-team1 ${match.team1.score > match.team2.score
                                                    ? "qualifiers-match-winner"
                                                    : ""
                                                }`}
                                        >
                                            <span>{match.team1.name}</span>
                                            <span className="qualifytime">{match.team1.score}</span>
                                        </div>
                                        <div
                                            className={`qualifiers-team2 ${match.team2.score > match.team1.score
                                                    ? "qualifiers-match-winner"
                                                    : ""
                                                }`}
                                        >
                                            <span>{match.team2.name}</span>
                                            <span className="qualifytime">{match.team2.score}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="semis-left-bracket">
                            {data.rightBracket.semis.map((match) => {
                                return (
                                    <div className="qualifiers-match">
                                        <span className="qualifiers-match-header"><span style={{fontFamily: "zoho_puviblack"}}>{match.hashTag}</span> | {formatDate(match?.schedule?.date)} | {match?.schedule?.from} - {match?.schedule?.to}</span>
                                        <div
                                            className={`qualifiers-team1 ${match.team1.score > match.team2.score
                                                    ? "qualifiers-match-winner"
                                                    : ""
                                                }`}
                                        >
                                            <span>{match.team1.name}</span>
                                            <span className="qualifytime">{match.team1.score}</span>
                                        </div>
                                        <div
                                            className={`qualifiers-team2 ${match.team2.score > match.team1.score
                                                    ? "qualifiers-match-winner"
                                                    : ""
                                                }`}
                                        >
                                            <span>{match.team2.name}</span>
                                            <span className="qualifytime">{match.team2.score}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="knockout-center">
                        <div className="finals">
                            <img src={ChampionsLeagueTrophy} alt="" className="trophy" />
                            <div className="qualifiers-match">
                            <span className="qualifiers-match-header"><span style={{fontFamily: "zoho_puviblack"}}>{data.final.hashTag}</span> | {formatDate(data.final?.schedule?.date)} | {data.final?.schedule?.from} - {data.final?.schedule?.to}</span>
                                <div
                                    className={`qualifiers-team1 ${data.final.team1.score > data.final.team2.score
                                            ? "qualifiers-match-winner"
                                            : ""
                                        }`}
                                >
                                    <span>{data.final.team1.name}</span>
                                    <span className="qualifytime">{data.final.team1.score}</span>
                                </div>
                                <div
                                    className={`qualifiers-team2 ${data.final.team2.score > data.final.team1.score
                                            ? "qualifiers-match-winner"
                                            : ""
                                        }`}
                                >
                                    <span>{data.final.team2.name}</span>
                                    <span className="qualifytime">{data.final.team2.score}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="knockout-right-bracket">
                        <div className="ro16-right-bracket">
                            {data.leftBracket.RO16.map((match, index) => {
                                return (
                                    <div
                                        className={`qualifiers-match ${index % 2 === 0 ? "top-right-arrow" : "bottom-right-arrow"
                                            }`}
                                    >
                                        <span className="qualifiers-match-header"><span style={{fontFamily: "zoho_puviblack"}}>{match.hashTag}</span> | {formatDate(match?.schedule?.date)} | {match?.schedule?.from} - {match?.schedule?.to}</span>
                                        <div
                                            className={`qualifiers-team1 ${match.team1.score > match.team2.score
                                                    ? "qualifiers-match-winner"
                                                    : ""
                                                }`}
                                        >
                                            <span>{match.team1.name}</span>
                                            <span className="qualifytime">{match.team1.score}</span>
                                        </div>
                                        <div
                                            className={`qualifiers-team2 ${match.team2.score > match.team1.score
                                                    ? "qualifiers-match-winner"
                                                    : ""
                                                }`}
                                        >
                                            <span>{match.team2.name}</span>
                                            <span className="qualifytime">{match.team2.score}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="quarters-right-bracket">
                            {data.leftBracket.quarters.map((match, index) => {
                                return (
                                    <div
                                        className={`qualifiers-match ${index % 2 === 0
                                                ? "quarters-top-right-arrow"
                                                : "quarters-bottom-right-arrow"
                                            }`}
                                    >
                                        <span className="qualifiers-match-header"><span style={{fontFamily: "zoho_puviblack"}}>{match.hashTag}</span> | {formatDate(match?.schedule?.date)} | {match?.schedule?.from} - {match?.schedule?.to}</span>
                                        <div
                                            className={`qualifiers-team1 ${match.team1.score > match.team2.score
                                                    ? "qualifiers-match-winner"
                                                    : ""
                                                }`}
                                        >
                                            <span>{match.team1.name}</span>
                                            <span className="qualifytime">{match.team1.score}</span>
                                        </div>
                                        <div
                                            className={`qualifiers-team2 ${match.team2.score > match.team1.score
                                                    ? "qualifiers-match-winner"
                                                    : ""
                                                }`}
                                        >
                                            <span>{match.team2.name}</span>
                                            <span className="qualifytime">{match.team2.score}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="semis-right-bracket">
                            {data.rightBracket.semis.map((match) => {
                                return (
                                    <div className="qualifiers-match">
                                        <span className="qualifiers-match-header"><span style={{fontFamily: "zoho_puviblack"}}>{match.hashTag}</span> | {formatDate(match?.schedule?.date)} | {match?.schedule?.from} - {match?.schedule?.to}</span>
                                        <div
                                            className={`qualifiers-team1 ${match.team1.score > match.team2.score
                                                    ? "qualifiers-match-winner"
                                                    : ""
                                                }`}
                                        >
                                            <span>{match.team1.name}</span>
                                            <span className="qualifytime">{match.team1.score}</span>
                                        </div>
                                        <div
                                            className={`qualifiers-team2 ${match.team2.score > match.team1.score
                                                    ? "qualifiers-match-winner"
                                                    : ""
                                                }`}
                                        >
                                            <span>{match.team2.name}</span>
                                            <span className="qualifytime">{match.team2.score}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div> : <></>}
               
            </div>
        </>
    );
};

export default Knockout;
