import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

function SearchForm() {
    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();

    function searchHandler(e) {
        e.preventDefault();

        navigate(`/search?search=${searchValue}`);
    }

    return (
        <form method="get" action="search" onSubmit={searchHandler} className="relative sm:block sm:w-[200px] md:w-[300px] lg:w-[220px] h-10 hidden mr-8 lg:mr-10 sm:left-10 md:left-32 lg:left-20">
            <input type="search" name="search" id="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Search' className='absolute l-0 t-0 w-full h-full text-white bg-transparent border border-[#ffffff80] caret-[#ff3700] rounded outline-0 py-0 px-11 backdrop-blur placeholder:text-white search' />
            <IoSearchOutline className='absolute top-2/4 left-2.5 translate-y-[-50%] pr-2.5 stroke-white border-r text-2xl' />
        </form>
    );
}

export default SearchForm;
