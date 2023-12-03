import PropTypes from "prop-types";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { IoPlaySharp } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import ModalVideo from 'react-modal-video'

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
                <div className="group mx-2.5 lg:w-[290px] lg:h-[440px] relative bg-black shadow-[0_0_16px] shadow-[#ffffff7f] before:absolute before:content-[''] before:inset-x-0 before:inset-y-0 before:bg-[rgba(0,0,0,0.29)]">
                    <img src={game.background_image} alt="Game Poster" className="lg:w-[290px] lg:h-[400px] w-[200px] h-[290px] object-cover border-b-2 border-b-[#ff3700]" />
                    <div className=" py-2.5 px-0 flex justify-between items-center ">
                        <h4 className="text-[#ddd] text-l font-normal pl-2.5 w-[190px] truncate">{game.name}
                        </h4>
                    </div>
                </div>
            </Link>
            <div className="absolute top-0 w-full h-[15%] flex justify-between items-center text-white bg-gradient-to-b from-black from-30% cursor-auto">
                <div className="flex flex-row">
                    <button onClick={onClick}>
                        <MdOutlineBookmarkAdd className={`duration-300 cursor-pointer mx-1 ${isFavorite ? 'fill-[#ff3700]' : 'fill-white'}`} size={30} />
                    </button>
                    <div className="pt-1">
                        <ModalVideo
                            channel='youtube'
                            autoplay
                            isOpen={isOpen}
                            videoId={game.movie}
                            onClose={() => setOpen(false)}
                        />
                        <button onClick={() => setOpen(true)}>
                            <IoPlaySharp className="duration-300 cursor-pointer fill-[#ff3700] group-hover:stroke-white mx-1" size={30} />
                        </button>
                    </div>
                </div>
                <p className="border-2 border-[#ff3700] px-2 py-2 mx-2">{game.metacritic > 0 ? game.metacritic : <IoStarSharp size={20} />}</p>
            </div>
        </div>
    );
}

export default GameThumbnail;
