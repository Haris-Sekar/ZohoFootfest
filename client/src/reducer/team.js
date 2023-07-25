import * as actionType from "../constants/actionTypes";
const teamReducer = (
    state = { teamDetails: [], qualifiedTeams: {}, matches: {}, standings: [] }, action
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
            return {...state, standings: action.data?.standings};
        default:
            return state;
    }
}

export default teamReducer;