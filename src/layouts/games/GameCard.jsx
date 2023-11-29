import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { IoPlaySharp } from "react-icons/io5";

GameCard.propTypes = {
    game: PropTypes.object,
};

function GameCard({ game }) {
    return (
        <Link to={`/games/${game.slug}`}>
            <div className="group mx-2.5 relative bg-black shadow-[0_0_16px] shadow-[#ffffff7f] before:absolute before:content-[''] before:inset-x-0 before:inset-y-0 before:bg-[rgba(0,0,0,0.29)]">
                <div className="absolute top-0 w-full h-[15%] flex justify-between items-center text-white bg-gradient-to-b from-black from-30% cursor-auto">
                    <div className="flex flex-row">
                        <MdOutlineBookmarkAdd className="duration-300 cursor-pointer mx-1" size={30} />
                        <IoPlaySharp className="duration-300 cursor-pointer fill-[#ff3700] group-hover:stroke-white mx-1" size={30} />
                    </div>
                    <p className="border-2 border-[#ff3700] px-2 py-2 lg:mx-4 mx-2">{game.metacritic}</p>
                </div>
                <img src={game.background_image} alt="Game Poster" className="lg:w-[290px] lg:h-[400px] w-[200px] h-[290px] object-cover border-b-2 border-b-[#ff3700]" />
                <div className=" py-2.5 px-0 flex justify-between items-center ">
                    <h4 className="text-[#ddd] text-l font-normal pl-2.5 w-[190px] truncate">{game.name}
                    </h4>
                </div>
            </div>
        </Link>
    );
}

export default GameCard;
