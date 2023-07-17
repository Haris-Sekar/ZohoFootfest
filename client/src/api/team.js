import axios from "axios";

const baseURL = axios.create({
    baseURL: "https://yyy.com"
});
const token = "";
baseURL.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    return req;
});

export const getTeamPerRound = (roundId) => baseURL.get(`api/v1/rounds/${roundId}/teams`);
export const getQualifiedTeams = (roundName) => baseURL.get(`api/v1/rounds/${roundName}/teams`);