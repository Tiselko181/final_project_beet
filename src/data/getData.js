import appLocalStorage from "./appLocalStorage";

export const TOKEN = import.meta.env.VITE_APP_RAWG_TOKEN;
export const URL = import.meta.env.VITE_APP_RAWG_BASEURL;

async function getData(url) {
    const chashData = appLocalStorage(url);

    if (chashData) return chashData;

    const response = await fetch(URL + decodeURIComponent(url));
    const data = await response.json();

    if (!data.errors) appLocalStorage(url, data);

    return data;
}

export default getData;
