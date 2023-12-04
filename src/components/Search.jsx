import { useState } from "react";
import PropTypes from "prop-types";
// import { IoSearchOutline } from "react-icons/io5";
import GamesList from "../layouts/games/GamesList";


Search.propTypes = {
    setSearchParams: PropTypes.func,
    gameQuery: PropTypes.string
};

function Search() {
    const [searchTerm, setSearchTerm] = useState("")
    const [gameResults, setGameResults] = useState([])


    const onSubmit = (e) => {
        e.preventDefault();
        const slug = searchTerm.split(' ').join('-').toLowerCase();

        setGameResults([]);

        fetch(`https://rawg.io/api/games?search=${slug}`)
            .then(resp => resp.json())
            .then(({ results }) => {
                results === undefined ? alert('no games found') : setGameResults(results)
            })
        setSearchTerm("")
    }

    console.log(searchTerm)

    return (
        <div className="game-search" >
            <h1>Game Search</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
                <br></br>
                <input type="submit" />
            </form>
            <GamesList gameResults={gameResults} />
        </div >

    );
}

export default Search;
