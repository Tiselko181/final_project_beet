import PropTypes from "prop-types";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdQuestionMark } from "react-icons/md";

GameThumbnail.propTypes = {
    game: PropTypes.object,
    isFavorite: PropTypes.bool,
    onClick: PropTypes.bool
};

function GameThumbnail({ game, isFavorite, onClick }) {
    const [isOpen, setOpen] = useState(false);



    return (
        <div className="relative my-2 mx-2">
            <Link to={`/games/${game.slug}`}>
                <div className="group mx-1.5 lg:w-[290px] xs:w-[100] lg:h-[440px] relative bg-black shadow-[0_0_16px] shadow-[#ffffff7f] before:absolute before:content-[''] before:inset-x-0 before:inset-y-0 before:bg-[rgba(0,0,0,0.29)]">
                    <img src={game.background_image} alt="Game Poster" className="lg:w-[290px] lg:h-[400px] w-[200px] h-[290px] object-cover border-b-2 border-b-[#ff3700]" />
                    <div className=" py-2.5 px-0 flex justify-between items-center ">
                        <h4 className="text-[#ddd] text-l font-normal pl-2.5 w-[190px] truncate">{game.name}
                        </h4>
                    </div>
                </div>
            </Link>
            <div className="absolute top-0 w-full h-[15%] flex justify-between items-center text-white bg-gradient-to-b from-black from-30% cursor-auto">
                <button onClick={onClick}>
                    <MdOutlineBookmarkAdd className={`duration-300 cursor-pointer mx-1 ${isFavorite ? 'fill-[#ff3700]' : 'fill-white'}`} size={30} />
                </button>
                <p className="border-2 border-[#ff3700] px-2 py-2 mx-2">{game.metacritic > 0 ? game.metacritic : <MdQuestionMark size={20} className="my-[3px]" />}</p>
            </div>
        </div>
    );
}

export default GameThumbnail;
