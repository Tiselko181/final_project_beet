import { useState } from "react";
import PropTypes from "prop-types";
import { IoSearchOutline } from "react-icons/io5";

Search.propTypes = {
    setSearchParams: PropTypes.func,
    gameQuery: PropTypes.string
};

function Search({ setSearchParams, gameQuery }) {
    const [search, setSearch] = useState(gameQuery);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const userSearchQuery = form.search.value;
        const userParams = {};

        if (userSearchQuery.length) userParams.search = userSearchQuery;

        setSearchParams(userParams);
    }

    return (
        <form method="get" onSubmit={handleSubmit} action="search">
            <div className='relative w-[300px] h-10'>
                <input type="search" name="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' className='absolute l-0 t-0 w-full h-full text-white bg-transparent border border-[#ffffff80] caret-[#ff3700] rounded outline-0 py-0 px-11 backdrop-blur placeholder:text-white search' />
                <IoSearchOutline className='absolute top-2/4 left-2.5 translate-y-[-50%] pr-2.5 stroke-white border-r text-2xl' />
            </div>
        </form>
    );
}

export default Search;
