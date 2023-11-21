import { useState } from 'react';
import PropTypes from "prop-types";
import VideoModal from "../VideoModal";
import Btn from "../Btn"
import { IoAddSharp, IoPlaySharp } from "react-icons/io5";

HeroContent.propTypes = {
    game: PropTypes.object,
};

const contentSpan = "text-white px-2.5 py-0 border-r border-[#ffffff99] last-of-type:border-r-0 first-of-type:border-l-0";

function HeroContent({ game }) {
    const [videoModal, setVideoModal] = useState(false);
    const toogleVideoModal = () => {
        setVideoModal(!videoModal);
    }

    return (
        <>
            <div className={`content ${game.active ? 'content-active' : undefined}`}>
                <img src={game.titleImg} alt="game_title" className='max-w-[250px] mb-5' />
                <h4 className='text-[#ffffff99] font-normal text-3xl'>
                    <span className={contentSpan}>{game.year}</span>
                    <span className={contentSpan}><i className="text-white py-0 px-2 rounded-sm inline-block bg-[#ff3700]">{game.waiting}</i></span>
                    <span className={contentSpan}>{game.genre}</span>
                </h4>
                <p className='text-base font-normal text-white mx-0 mt-5 mb-5'>{game.description}</p>
                <Btn
                    icon={<IoPlaySharp className='fill-[#ff3700] group-hover:fill-white' />}
                    name='Watch'
                    color='#ff3700'
                    bgColor='#fff'
                    className='hover:!text-white hover:!bg-[#ff3700]'
                    onClick={toogleVideoModal} />
                {game.active && <VideoModal game={game} status={videoModal} toogleVideoModal={toogleVideoModal} />}
                <Btn icon={<IoAddSharp className='stroke-white group-hover:stroke-[#ff3700]' />} name='My List' className='hover:!text-[#ff3700] hover:!bg-[#ff3700]' />
            </div>
        </>
    );
}

export default HeroContent;
