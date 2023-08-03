import * as api from "../api/team";
import * as actionType from "../constants/actionTypes";
export const getTeamPerRound = (roundId) => async (dispatch) => {
    try{
        dispatch({type: actionType.START_LOADING});
        const {data,status} = await api.getTeamPerRound(roundId);
        dispatch({type: actionType.STOP_LOADING});
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
        dispatch({type: actionType.START_LOADING});
        const { data,status } = await api.getQualifiedTeams();
        dispatch({type: actionType.STOP_LOADING});
        if(status === 200){
            dispatch({ type: actionType.QUALIFIED_TEAM, data});
        } else {
            console.log(`${data.error_code} -> ${data.message}`);
        }
    } catch (error) {
        console.log(error);
    }
}

export const getMatches = (roundName, isWomens) => async (dispatch) => {
    try {
        dispatch({type: actionType.START_LOADING});
        const {data, status} = isWomens ? await api.getWomensMatches(roundName) : await api.getMatches(roundName);
        dispatch({type: actionType.STOP_LOADING});
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

export const getStandings = (roundName, isWomens) => async (dispatch) => {
    try{
        dispatch({type: actionType.START_LOADING});
        let {data, status} = !isWomens ? await api.getStandings(roundName) : await api.getWomensStandings(roundName);

        dispatch({type: actionType.STOP_LOADING});
        if(status === 200) {
            dispatch({type: actionType.GET_STANDINGS, data});
        } else {
            console.log(`${data.error_code} -> ${data.message}`);
        }
    } catch(error) {
        console.log(error);
    }
}

export const getGroupMatch = (isWomens, roundName) => async (dispatch) => {
    try{
        dispatch({type: actionType.START_LOADING});
        let {data, status} = await api.getGroupMatch();
        dispatch({type: actionType.STOP_LOADING});
        console.log("data", data);
        if(status === 200) {
            dispatch({type: actionType.GET_GROUP_MATCH, data});
        } else {
            console.log(`${data.error_code} -> ${data.message}`);
        }
    } catch (error) {
        console.log(error);
    }
}


export const resetMatches = () => (dispatch) => {
    dispatch({type: actionType.RESET_MATCHES});
}

export const resetStandings = () => (dispatch) => {
    dispatch({type: actionType.RESET_STANDINGS})
}