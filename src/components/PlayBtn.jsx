import { IoPlayOutline } from "react-icons/io5";

function PlayBtn() {
    return (
        <>
            <div className='relative invisible opacity-0 scale-0 z-[900] content-active flex justify-center items-center'>
                <a href="#"
                    className=' group flex items-center rounded-full border-2 border-[#ff3700] px-6 pb-[6px] pt-2 bg-transparent backdrop-blur transition duration-150 ease-in-out hover:border-white hover:bg-neutral-500 hover:bg-opacity-10 focus:border-[#ff3700] focus:outline-none focus:ring-0'>
                    <IoPlayOutline className='text-[40px] stroke-[#ff3700] group-hover:stroke-white' />
                    <span className='text-white group-hover:text-[#ff3700] text-2xl leading-normal ml-5 mb-0 uppercase '>Watch Trailer</span>
                </a>
            </div>
        </>
    );
}

export default PlayBtn;
