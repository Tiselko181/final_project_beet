import { useState } from "react";
import PropTypes from "prop-types";
import { IoSearchOutline } from "react-icons/io5";
import GamesList from "../layouts/games/GamesList";


Search.propTypes = {
    setSearchParams: PropTypes.func,
    gameQuery: PropTypes.string
};

function Search() {
    const [searchTerm, setSearchTerm] = useState("")
    const [, setGameResults] = useState([])


    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     const slug = searchTerm.split(' ').join('-').toLowerCase();

    //     setGameResults([]);

    //     fetch(`https://rawg.io/api/games?search=${slug}`)
    //         .then(resp => resp.json())
    //         .then(({ results }) => {
    //             results === undefined ? alert('no games found') : setGameResults(results)
    //         })
    //     setSearchTerm("")
    // }

    return (
        <GamesList />
    );
}

export default Search;
