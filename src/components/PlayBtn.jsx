import { useState } from 'react';
import { IoPlayOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import VideoModal from "./VideoModal";

PlayBtn.propTypes = {
    game: PropTypes.object,
};

function PlayBtn({ game }) {
    const [videoModal, setVideoModal] = useState(false);
    const toogleVideoModal = () => {
        setVideoModal(!videoModal)
    }

    return (
        <>
            <div className={`playBtn ${game.active ? 'playBtn-active' : undefined}`}>
                <a href="#"
                    className=' group flex items-center rounded-full border-2 border-[#ff3700] px-6 pb-[6px] pt-2 bg-transparent backdrop-blur transition duration-150 ease-in-out hover:border-white hover:bg-neutral-500 hover:bg-opacity-10 focus:border-[#ff3700] focus:outline-none focus:ring-0'>
                    <IoPlayOutline className='text-[40px] stroke-[#ff3700] group-hover:stroke-white' />
                    <span className='text-white group-hover:text-[#ff3700] text-2xl leading-normal ml-5 mb-0 uppercase '>Watch Trailer</span>
                </a>
            </div>
            {game.active && <VideoModal game={game} status={videoModal} toogleVideoModal={toogleVideoModal} />}
        </>
    );
}

export default PlayBtn;
