import { IoPlaySharp } from "react-icons/io5";
import PropTypes from "prop-types";
// import VideoModal from "./VideoModal";

PlayBtn.propTypes = {
    game: PropTypes.object,
    toogleVideoModal: PropTypes.func,
};

function PlayBtn({ game, toogleVideoModal }) {

    return (
        <>
            <div className={`playBtn ${game.active ? 'playBtn-active' : undefined}`}>
                <a href="#"
                    onClick={toogleVideoModal}
                    className='group relative inline-flex items-center gap-2.5 mr-[15px] py-[5px] px-4 no-underline text-lg font-normal tracking-[1px] uppercase duration-300 text-[#ff3700] bg-white !cursor-pointer rounded border-0 hover:!text-white hover:!bg-[#ff3700]'>
                    <IoPlaySharp className=' stroke-[#ff3700] group-hover:stroke-white' />
                    Watch
                </a>
            </div>
            {/* {game.active && <VideoModal game={game} status={videoModal} />} */}
        </>
    );
}

export default PlayBtn;

// <a> - className=' group flex items-center rounded-full border-2 border-[#ff3700] px-6 pb-[6px] pt-2 bg-transparent backdrop-blur transition duration-150 ease-in-out hover:border-white hover:bg-neutral-500 hover:bg-opacity-10 focus:border-[#ff3700] focus:outline-none focus:ring-0'
{/* icon - text-[40px] */ }
