import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { tokenKey, baseUrl, genresEndpoint } from "../config/config";

// Genres.propTypes = {
//     game: PropTypes.array,
//     // selectedGenre: PropTypes.string,
//     // onGenreChange: PropTypes.func
// };

function Genres() {
    const [genresList, setGenresList] = useState(
        () => {
            const data = JSON.parse(
                window.localStorage.getItem(`${baseUrl}${genresEndpoint}${tokenKey}`)
            );
            return data ? data.results : [];
        }
    );

    useEffect(() => {
        async function getGenresList() {
            try {
                const server = `${baseUrl}${genresEndpoint}${tokenKey}`;
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

    console.log(genresList)

    return (
        <>
            {/* <h2 className="text-white text-2xl uppercase">Genres:</h2> */}
            <ul className="pt-0 pb-2.5">
                <li className="mb-2.5 py-2.5 px-6 text-white text-center text-sm uppercase rounded bg-[#191919] cursor-pointer hover:bg-[#ff3700] active:bg-[#ff3700]">All</li>
                {genresList.map((genre, index) => (
                    <li key={index} className="my-2.5 py-2.5 px-6 text-white text-center text-sm uppercase rounded bg-[#191919] cursor-pointer hover:bg-[#ff3700] active:bg-[#ff3700]">{genre.name}</li>
                ))}
            </ul>
        </>
    );
}

export default Genres;

// function Genres({ selectedGenre, onGenreChange }) {
//     const [genresList, setGenresList] = useState(
//         () => {
//             const data = JSON.parse(
//                 window.localStorage.getItem(`${baseUrl}${genresEndpoint}${tokenKey}`)
//             );
//             return data ? data.results : [];
//         }
//     );

//     useEffect(() => {
//         async function getGenresList() {
//             try {
//                 const server = `${baseUrl}${genresEndpoint}${tokenKey}`;
//                 const response = await fetch(server, {
//                     method: 'GET',
//                 });

//                 if (!response.ok) {
//                     throw new Error(`Failed to fetch genres: ${response.status}`);
//                 }

//                 const genresData = await response.json();

//                 window.localStorage.setItem(server, JSON.stringify(genresData));

//                 setGenresList(genresData.results);
//             } catch (error) {
//                 console.error('Error fetching genres:', error.message);
//             }
//         }
//         genresList.length || getGenresList();

//     }, [genresList]);

//     return (
//         <>
//             <h2 className="text-white text-xl pt-5">Genres</h2>
//             <ul>
//                 {genresList.map((genre, index) => (
//                     <li key={index} onClick={() => onGenreChange(genre.name)}> {genre.name}</li>
//                 ))}
//             </ul >
//         </>
//     )
// }

// export default Genres;
