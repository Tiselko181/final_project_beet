import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { IoPlaySharp } from "react-icons/io5";

GameCard.propTypes = {
    game: PropTypes.object,
};

function GameCard({ game }) {
    return (
        <Link to={`/games/${game.slug}`} className="basis-1/6">
            <div className="group border-none relative rounded-none bg-black shadow-[0_0_16px] shadow-[#ffffff7f] duration-500 before:absolute before:content-[''] before:inset-x-0 before:inset-y-0 before:bg-[rgba(0,0,0,0.6)] before:duration-500">
                <img src={game.background_image} alt="Game Poster" className="w-[290px] h-[400px] object-cover border-b-2 border-b-[#ff3700]" />
                <div className="text-[#ddd] text-xl font-normal py-2.5 px-0 flex justify-between items-center ">
                    <h4 className="pl-2.5 overflow-hidden">{game.name}</h4>
                    <span className="border border-[#ff3700] px-2 py-2 mr-2.5">{game.metacritic}</span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white duration-500">
                    <MdOutlineBookmarkAdd className="duration-300 cursor-pointer" size={30} />
                    <IoPlaySharp className="duration-300 cursor-pointer fill-[#ff3700] group-hover:stroke-white" size={30} />

                </div>
            </div>
        </Link>
    );
}

export default GameCard;
