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

export const getQualifiedTeams = (roundName) => async (dispatch) => {
    try {
        const { data,status } = await api.getQualifiedTeams(roundName);
        if(status === 200){
            dispatch({ type: actionType.QUALIFIED_TEAM, data});
        } else {
            console.log(`${data.error_code} -> ${data.message}`);
        }
    } catch (error) {
        console.log(error);
    }
}