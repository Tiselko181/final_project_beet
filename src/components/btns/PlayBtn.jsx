import { IoPlaySharp } from "react-icons/io5";
import PropTypes from "prop-types";
import VideoModal from "../VideoModal";
import { useState } from "react";

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
                <button
                    onClick={toogleVideoModal}
                    className='group relative inline-flex items-center gap-2.5 sm:mx-[15px] mx-2 py-[5px] px-4 no-underline md:text-lg text-sm font-normal tracking-[1px] uppercase duration-300 text-[#ff3700] bg-white !cursor-pointer rounded border-0 hover:!text-white hover:!bg-[#ff3700]'>
                    <IoPlaySharp className=' stroke-[#ff3700] group-hover:stroke-white' />
                    Watch
                </button>
                {game.active && <VideoModal game={game} status={videoModal} toogleVideoModal={toogleVideoModal} />}
            </div>
        </>
    );
}

export default PlayBtn;

