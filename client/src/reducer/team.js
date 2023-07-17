import * as actionType from "../constants/actionTypes";
const teamReducer = (
    state = {teamDetails: [], qualifiedTeams: {}}, action, data
) => {
    switch (action.type) {
        case actionType.TEAM_DETAILS:
            let teamDetaisObj = {};
            teamDetaisObj[data.roundId] = data.teams;
            return {...state, teamDetails: [...state.teamDetails, teamDetaisObj]};
        case actionType.QUALIFIED_TEAM:
            let qualifiedTeams = {};
            qualifiedTeams.isQualifiedTeams = true;
            qualifiedTeams.teams = data.teams;
            return {...state, qualifiedTeams: qualifiedTeams};
        default:
            return state;
    }
}

export default teamReducer;