// import { useState } from 'react';
import PropTypes from "prop-types";
// import VideoModal from "../VideoModal";
import Btn from "../btns/Btn"
import { MdOutlineBookmarkAdd } from "react-icons/md";
import PlayBtn from '../btns/PlayBtn';

HeroContent.propTypes = {
    game: PropTypes.object,
};

const contentSpan = "text-white px-2.5 py-0 border-[#ffffff99]";

function HeroContent({ game }) {
    return (
        <>
            <div className={`content ${game.active ? 'content-active' : undefined}`}>
                <img src={game.titleImg} alt="game_title" className='sm:max-w-[250px] max-w-[150px] mb-1.5 md:mb-5' />
                <div className='text-[#ffffff99] font-normal md:text-3xl text-lg flex flex-col sm:flex-row items-center'>
                    <p className={`${contentSpan} lg:flex lg:flex-col`}><span className="text-xs font-bold text-[#ff3700] pr-[5px]">{game.date}</span>{game.year}</p>
                    <p className={`${contentSpan} border-x`}><i className="py-0 px-2 rounded-sm inline-block bg-[#ff3700] ">{game.waiting}</i></p>
                    <p className={contentSpan}>{game.genre}</p>
                </div>
                <p className='s:text-base text-xs text-center md:text-start font-normal mx-10 mt-5 mb-5'>{game.description}</p>
                <div className="flex">
                    <PlayBtn game={game} className="pr-2" />
                    <Btn className='pl-2' icon={<MdOutlineBookmarkAdd className='stroke-white group-hover:stroke-[#ff3700]' />} name='My List' />
                </div>
            </div>
        </>
    );
}

export default HeroContent;
