import { TOKEN } from "../data/dataKey";

//api key
export const tokenKey = `?key=${TOKEN}`

//url
export const baseUrl = import.meta.env.VITE_APP_RAWG_BASEURL;
export const gamesEndpoint = `games`;
export const genresEndpoint = `genres`;
export const platformsEndpoint = `platforms`;
export const developersEndpoint = `developers`;
