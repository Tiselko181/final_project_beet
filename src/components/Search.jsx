import { IoSearchOutline } from "react-icons/io5";

function Search() {
    return (
        <div className='relative w-[300px] h-10'>
            <input type="text" placeholder='Search' className='absolute l-0 t-0 w-full h-full text-white bg-transparent border border-[#ffffff80] rounded outline-0 py-0 px-11 backdrop-blur placeholder:text-white' />
            <IoSearchOutline className='absolute top-2/4 left-2.5 translate-y-[-50%] pr-2.5 stroke-white border-r text-2xl' />
        </div>
    );
}

export default Search;
