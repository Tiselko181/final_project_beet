import { TOKEN, URL } from "../data/getData";

//api key
export const tokenKey = `?key=${TOKEN}`

//url
export const gamesEndpoint = `games`;
export const baseURL = `${URL}${gamesEndpoint}${tokenKey}`;
export const pageUrl = `${URL}${gamesEndpoint}${tokenKey}&page=`;
export const genresEndpoint = `genres`;
export const platformsEndpoint = `platforms`;
export const developersEndpoint = `developers`;
