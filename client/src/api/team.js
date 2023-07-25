import axios from "axios";

const baseURL = axios.create({
    baseURL: "https://footfest-816103638.development.catalystserverless.com"
});

export const getTeamPerRound = (roundId) => baseURL.get(`api/v1/rounds/${roundId}/teams`);
export const getQualifiedTeams = () => baseURL.get(`api/v1/rounds/g/teams`);
export const getMatches = (roundName) => baseURL.get(`api/v1/rounds/${roundName}/matches`);
export const getStandings = (roundName) => baseURL.get(`/api/v1/rounds/${roundName}/standings`);