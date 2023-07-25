import * as api from "../api/team";
import * as actionType from "../constants/actionTypes";
export const getTeamPerRound = (roundId) => async (dispatch) => {
    try{
        const {data,status} = await api.getTeamPerRound(roundId);
        if(status === 200) {
            data['roundId'] = roundId;
            dispatch({ type: actionType.TEAM_DETAILS, data });
        } else {
            console.log(`${data.error_code} -> ${data.message}`);
        }
        
    } catch(error) {
        console.log(error);
    }
}

export const getQualifiedTeams = () => async (dispatch) => {
    try {
        const { data,status } = await api.getQualifiedTeams();
        if(status === 200){
            dispatch({ type: actionType.QUALIFIED_TEAM, data});
        } else {
            console.log(`${data.error_code} -> ${data.message}`);
        }
    } catch (error) {
        console.log(error);
    }
}

export const getMatches = (roundName) => async (dispatch) => {
    try {
        const {data, status} = await api.getMatches(roundName);
        if(status === 200) {
            data.roundName = roundName;
            dispatch({type: actionType.GET_MATCHES, data});
        } else {
            console.log(`${data.error_code} -> ${data.message}`);
        }
    } catch (error) {
        console.log(error);
    }
}

export const getStandings = (roundName) => async (dispatch) => {
    try{
        let {data, status} = await api.getStandings(roundName);
        if(status === 200) {
            data = {

                "standings": [
             
                    {
             
                        "group": {
             
                            "id": 14781000000009243,
             
                            "name": "group_a",
             
                            "display_name": "Group A"
             
                        },
             
                        "teams": [
             
                            {
             
                                "id": 14781000000008118,
             
                                "name": "Team 1",
             
                                "games_played": 1,
             
                                "win": 1,
             
                                "draw": 0,
             
                                "loss": 0,
             
                                "goal_difference": 0,
             
                                "points": 3
             
                            },
             
                            {
             
                                "id": 14781000000008308,
             
                                "name": "Team 96",
             
                                "games_played": 1,
             
                                "win": 0,
             
                                "draw": 0,
             
                                "loss": 1,
             
                                "goal_difference": 0,
             
                                "points": 0
             
                            },
             
                            {
             
                                "id": 14781000000008310,
             
                                "name": "Team 97",
             
                                "games_played": 0,
             
                                "win": 0,
             
                                "draw": 0,
             
                                "loss": 0,
             
                                "goal_difference": 0,
             
                                "points": 0
             
                            },
             
                            {
             
                                "id": 14781000000008312,
             
                                "name": "Team 98",
             
                                "games_played": 0,
             
                                "win": 0,
             
                                "draw": 0,
             
                                "loss": 0,
             
                                "goal_difference": 0,
             
                                "points": 0
             
                            }
             
                        ]
             
                    },
             
                    {
             
                        "group": {
             
                            "id": 14781000000009246,
             
                            "name": "group_b",
             
                            "display_name": "Group B"
             
                        },
             
                        "teams": [
             
                            {
             
                                "id": 14781000000008316,
             
                                "name": "Team 100",
             
                                "games_played": 1,
             
                                "win": 0,
             
                                "draw": 0,
             
                                "loss": 1,
             
                                "goal_difference": -1,
             
                                "points": 0
             
                            },
             
                            {
             
                                "id": 14781000000008314,
             
                                "name": "Team 99",
             
                                "games_played": 1,
             
                                "win": 1,
             
                                "draw": 0,
             
                                "loss": 0,
             
                                "goal_difference": 1,
             
                                "points": 3
             
                            }
             
                        ]
             
                    },
             
                    {
             
                        "group": {
             
                            "id": 14781000000009249,
             
                            "name": "group_c",
             
                            "display_name": "Group C"
             
                        },
             
                        "teams": []
             
                    },
             
                    {
             
                        "group": {
             
                            "id": 14781000000009252,
             
                            "name": "group_d",
             
                            "display_name": "Group D"
             
                        },
             
                        "teams": []
             
                    },
             
                    {
             
                        "group": {
             
                            "id": 14781000000011765,
             
                            "name": "group_e",
             
                            "display_name": "Group E"
             
                        },
             
                        "teams": []
             
                    },
             
                    {
             
                        "group": {
             
                            "id": 14781000000011768,
             
                            "name": "group_f",
             
                            "display_name": "Group F"
             
                        },
             
                        "teams": []
             
                    },
             
                    {
             
                        "group": {
             
                            "id": 14781000000011771,
             
                            "name": "group_g",
             
                            "display_name": "Group G"
             
                        },
             
                        "teams": []
             
                    },
             
                    {
             
                        "group": {
             
                            "id": 14781000000011774,
             
                            "name": "group_h",
             
                            "display_name": "Group H"
             
                        },
             
                        "teams": []
             
                    }
             
                ],
             
                "status": "success"
             
             }
            dispatch({type: actionType.GET_STANDINGS, data});
        } else {
            console.log(`${data.error_code} -> ${data.message}`);
        }
    } catch(error) {
        console.log(error);
    }
}