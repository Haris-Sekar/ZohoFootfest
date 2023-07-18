import React from 'react'

const Brackets = ({ props }) => {
    return (
        <div className="qualifiers_main">
            <div className="qualifiers_left_container">

                <div className="teamOne_whole">
                    <span className="qualifiersteam_header">{props.match1.hashtag}</span>
                    <div className="qualifiers_teamOne">
                        <div className="qualifiersteamone_partOne">
                            <span>{props.match1.team1.name}</span>
                            <span>{props.match1.team1.points}</span>
                        </div>
                        <div className="qualifiersteamone_parttwo">
                            <span>{props.match1.team2.name}</span>
                            <span className="qualifytime">{props.match1.team2.points}</span>
                        </div>
                    </div>
                </div>

                <div className="teamtwo_whole">
                    <span className="qualifiersteam_header">{props.match2.hashtag}</span>
                    <div className="qualifiers_teamtwo">
                        <div className="qualifiersteamtwo_partOne">
                            <span>{props.match2.team1.name}</span>
                            <span className="qualifytime">{props.match2.team1.points}</span>
                        </div>
                        <div className="qualifiersteamtwo_parttwo">
                            <span>{props.match2.team2.name}</span>
                            <span className="qualifytime">{props.match2.team2.points}</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="qualifiers_right_container">

                <div className="teamthree_whole">
                    <span className="qualifiersteam_header">{props.match.hashtag}</span>
                    <div className="qualifiers_teamthree">
                        {props.match?.team1 ? (<div className="qualifiersteamthree_partOne">
                            <span>{props.match.team1.name}</span>
                            <span>{props.match.team1.points}</span>
                        </div>) : (<></>)}
                        {props.match?.team2 ? (<div className="qualifiersteamthree_parttwo">
                            <span>{props.match.team2.name}</span>
                            <span className="qualifytime">{props.match.team2.points}</span>
                        </div>) : (<></>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brackets