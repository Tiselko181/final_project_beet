import { useEffect, useState } from 'react';
import { URL } from "../../data/getData";
import { gamesEndpoint, tokenKey } from "../../config/config";

function GameVideo() {
    const [videos, setVideos] = useState([]);

    const fetchVideos = () => {
        fetch(`${URL}${gamesEndpoint}${tokenKey}`)
            .then(resp => resp.json())
            .then(({ results }) => setVideos(results))
            .catch(error => console.error('Error fetching data:', error));
    }

    useEffect(() => {
        fetchVideos()
    }, [])
    return (<p>  </p>);
}

export default GameVideo;
