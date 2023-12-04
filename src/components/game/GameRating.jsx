import PropTypes from "prop-types";
import { MdQuestionMark } from "react-icons/md";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


GameRating.propTypes = {
    game: PropTypes.object,
};

function GameRating({ game }) {
    return (
        <div className="flex items-center justify-between pt-2.5 pb-5">
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Rating name="read-only" value={game.rating} precision={0.5} readOnly />
            </Box>
            <div className="flex items-center">
                <img src="/assets/metacritic.png" width={120} alt="Metacritic Logo" />
                <p className="text-xl px-1 py-1 border border-[#ff3700]">{game.metacritic > 0 ? game.metacritic : <MdQuestionMark size={20} className="my-[3px]" />}</p>
            </div>
        </div>
    )
}

export default GameRating;
