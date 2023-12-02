import { useState, useEffect } from "react";
<<<<<<< HEAD
import { tokenKey, baseUrl, genresEndpoint } from "../config/config";
import PropTypes from "prop-types";


Genres.propTypes = {
    setGameList: PropTypes.func,
    gameList: PropTypes.arr
};

function Genres({ setGameList, gameList }) {
=======
import PropTypes from "prop-types";
import { URL } from "../data/getData";
import { tokenKey, genresEndpoint } from "../config/config";

Genres.propTypes = {
    setGameList: PropTypes.func,
    gameList: PropTypes.array
};

function Genres({ setGameList, gameList }) {
    // console.log(gameList);
>>>>>>> eae3fb0 (roll back and fixed genres, search, gameList)
    const [genresList, setGenresList] = useState(
        () => {
            const data = JSON.parse(
                window.localStorage.getItem(`${URL}${genresEndpoint}${tokenKey}`)
            );
            return data ? data.results : [];
        }
    );

    useEffect(() => {
        async function getGenresList() {
            try {
                const server = `${URL}${genresEndpoint}${tokenKey}`;
                const response = await fetch(server, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch genres: ${response.status}`);
                }

                const genresData = await response.json();

                window.localStorage.setItem(server, JSON.stringify(genresData));

                setGenresList(genresData.results);
            } catch (error) {
                console.error('Error fetching genres:', error.message);
            }
        }
        genresList.length || getGenresList();

    }, [genresList]);

<<<<<<< HEAD
    // const gameDataResults = [...gameList];
=======
    // console.log(genresList)
>>>>>>> eae3fb0 (roll back and fixed genres, search, gameList)

    const handleGenresFilter = selectedGenre => {
        // console.log(selectedGenre)
        if (selectedGenre === 'All') {
            setGameList(gameList);
        } else {
            const filteredGamesByGenre = gameList.filter(game => game.genres.some(genre => genre.name === selectedGenre));
            setGameList(filteredGamesByGenre);
        }
    }

    const liStyle = "mb-2.5 py-2.5 px-6 text-white text-center text-sm uppercase rounded bg-[#191919] cursor-pointer hover:bg-[#ff3700]";

    return (
        <>
            <ul className="pt-0 pb-2.5">
                <li className={`${liStyle} activeLi`} onClick={() => { handleGenresFilter() }}>All</li>
                {genresList.map((genre, index) => (
                    <li key={index} onClick={() => { handleGenresFilter(genre.name) }} className={`${liStyle}`}>{genre.name}</li>
                ))}
            </ul >
        </>
    );
}

export default Genres;
