import PropTypes from "prop-types";
import Rating from '@mui/material/Rating';


GameRating.propTypes = {
    game: PropTypes.object,
};

function GameRating({ game }) {
    return (
        <div className="flex items-center justify-between pt-2.5 pb-5">
            <Rating name="half-rating-read" defaultValue={game.rating} precision={0.5} readOnly />
            <div className="flex items-center">
                <img src="/assets/metacritic.png" width={120} alt="Metacritic Logo" />
                <p className="text-xl px-1 py-1 border border-[#ff3700]">{game.metacritic}</p>
            </div>
        </div>
    )
}

export default GameRating;
