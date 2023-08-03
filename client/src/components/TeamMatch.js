import React from 'react'
import {formatDate} from "../constants/commonFunction";
const TeamMatch = ({ matches, roundName, isLeauge }) => {
   
    return (
        <>
            {isLeauge !== undefined ? (
                
                <>
                <div className='roundTitle'>{roundName}</div>
                    <div className="qualifiers_main flexwrap">
                    {matches?.map((match) => (
                        <div className="leaugematch_left_container round">
                            <div className="teamOne_whole">
                            <span className="qualifiersteam_header"><span style={{fontFamily: "zoho_puviblack"}}>{match?.name}</span> | {formatDate(match?.schedule?.date)} | {match?.schedule?.from} - {match?.schedule?.to}</span>
                                <div className="qualifiers_teamOne">
                                    <div className="qualifiersteamone_partOne">
                                        <span>{match?.team1?.name}</span>
                                        <span className='qualifytime'>{match?.team1?.goals === undefined ? 0 : match?.team1?.goals}</span>
                                    </div>
                                    <div className="qualifiersteamone_parttwo">
                                        <span>{match?.team2?.name}</span>
                                        <span className="qualifytime">{match?.team2?.goals === undefined ? 0 : match?.team2?.goals}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>  
                </>
            ) : (
                <div className="qualifiers_main flexremove">
                    <div className='roundTitle'>{roundName}</div>
                    {matches?.map((match) => (
                        <div className="match_left_container round">
                            <div className="teamOne_whole">
                                <span className="qualifiersteam_header"><span style={{fontFamily: "zoho_puviblack"}}>{match?.name}</span> | {formatDate(match?.schedule?.date)} | {match?.schedule?.from} - {match?.schedule?.to}</span>
                                <div className="qualifiers_teamOne">
                                    <div className="qualifiersteamone_partOne">
                                        <span>{match?.team1?.name}</span>
                                        <span className='qualifytime'>{match?.team1?.goals === undefined ? 0 : match?.team1?.goals + match?.team1?.penalty_goals}</span>
                                    </div>
                                    <div className="qualifiersteamone_parttwo">
                                        <span>{match?.team2?.name}</span>
                                        <span className="qualifytime">{match?.team2?.goals === undefined ? 0 : match?.team2?.goals + match?.team2?.penalty_goals}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>  
            )}
        </>

    )

}

export default TeamMatch;