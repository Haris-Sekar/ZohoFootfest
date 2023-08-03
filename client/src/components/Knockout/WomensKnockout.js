import React from 'react';
import ChampionsLeagueTrophy from "../../images/champions-league-trophy.png";
import { formatDate } from "../../constants/commonFunction";
const WomensKnockout = ({data}) => {
  return (
    <>
            <div className='wn-container'>
                <div className='wn-qualifiers-main'>
                    <div className='wn-knockout-left-bracket'>
                        <div className='wn-semis-left-bracket'>
                            {
                                data.leftBracket.semis.map((match) => {
                                    return (
                                        <div className='qualifiers-match'>
                                            <span className="qualifiers-match-header"><span style={{fontFamily: "zoho_puviblack"}}>{match.hashTag}</span> | {formatDate(match?.schedule?.date)} | {match?.schedule?.from} - {match?.schedule?.to}</span>
                                            <div className={`qualifiers-team1 ${match.team1.score > match.team2.score ? "qualifiers-match-winner" : ""}`}>
                                                <span>{match.team1.name}</span>
                                                <span className='qualifytime'>{match.team1.score}</span>
                                            </div>
                                            <div className={`qualifiers-team2 ${match.team2.score > match.team1.score ? "qualifiers-match-winner" : ""}`}>
                                                <span>{match.team2.name}</span>
                                                <span className='qualifytime'>{match.team2.score}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='wn-knockout-center'>
                        <div className='finals'>
                            <img src={ChampionsLeagueTrophy} alt="" className='trophy' />
                            <div className='qualifiers-match'>
                                <h3 className='qualifiers-match-header' style={{textAlign: 'center'}}><span style={{fontFamily: "zoho_puviblack"}}>{data.final.hashTag}</span> | {formatDate(data.final?.schedule?.date)} | {data.final?.schedule?.from} - {data.final?.schedule?.to}</h3>
                                <div className={`qualifiers-team1 ${data.final.team1.score > data.final.team2.score ? "qualifiers-match-winner" : ""}`}>
                                    <span>{data.final.team1.name}</span>
                                    <span className='qualifytime'>{data.final.team1.score}</span>
                                </div>
                                <div className={`qualifiers-team2 ${data.final.team2.score > data.final.team1.score ? "qualifiers-match-winner" : ""}`}>
                                    <span>{data.final.team2.name}</span>
                                    <span className='qualifytime'>{data.final.team2.score}</span>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className='wn-knockout-right-bracket'>
                        <div className='wn-semis-right-bracket'>
                            {
                                data.rightBracket.semis.map((match) => {
                                    return (
                                        <div className='qualifiers-match'>
                                            <span className="qualifiers-match-header"><span style={{fontFamily: "zoho_puviblack"}}>{match.hashTag}</span> | {formatDate(match?.schedule?.date)} | {match?.schedule?.from} - {match?.schedule?.to}</span>
                                            <div className={`qualifiers-team1 ${match.team1.score > match.team2.score ? "qualifiers-match-winner" : ""}`}>
                                                <span>{match.team1.name}</span>
                                                <span className='qualifytime'>{match.team1.score}</span>
                                            </div>
                                            <div className={`qualifiers-team2 ${match.team2.score > match.team1.score ? "qualifiers-match-winner" : ""}`}>
                                                <span>{match.team2.name}</span>
                                                <span className='qualifytime'>{match.team2.score}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default WomensKnockout