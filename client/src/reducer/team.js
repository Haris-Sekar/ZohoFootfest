import * as actionType from "../constants/actionTypes";
const teamReducer = (
    state = { teamDetails: [], qualifiedTeams: {}, matches: {}, standings: [], groupMatch: [], isLoading: false }, action
) => {
    switch (action.type) {
        case actionType.TEAM_DETAILS:
            let teamDetaisObj = {};
            teamDetaisObj[action.data.roundId] = action.data.teams;
            return {...state, teamDetails: [...state.teamDetails, teamDetaisObj]};
        case actionType.QUALIFIED_TEAM:
            let qualifiedTeams = {};
            qualifiedTeams.isQualifiedTeams = true;
            qualifiedTeams.teams = action.data.teams;
            return {...state, qualifiedTeams: qualifiedTeams};
        case actionType.GET_MATCHES:
            let matches = state.matches;
            matches[action.data.roundName] = action.data;
            return {...state, matches: matches};
        case actionType.GET_STANDINGS:
            return {...state, standings: action.data.standings};
        case actionType.GET_GROUP_MATCH:
            return {...state, groupMatch: action.data};
        case actionType.START_LOADING:
            return {...state, isLoading: true}
        case actionType.STOP_LOADING:
            return {...state, isLoading: false}
        case actionType.RESET_MATCHES:
            return {...state, matches: {}};
        case actionType.RESET_STANDINGS:
            return {...state, standings:[]};
        default:
            return state;
    }
}

export default teamReducer;