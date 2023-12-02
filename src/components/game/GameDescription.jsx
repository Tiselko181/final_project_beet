import PropTypes from "prop-types";
import { useState } from "react";

GameDescription.propTypes = {
    game: PropTypes.object,
};

function GameDescription({ game }) {
    const [showMore, setShowMore] = useState(false);
    const text = `${game.description_raw}`;

    return (
        <>
            <span className="font-light px-3 pt-1 pb-6">
                {showMore ? text : `${text.substring(0, 250)}`}
            </span>
            <button className="mx-[15px] py-[5px] px-4 no-underline w-36 text-sm font-normal uppercase bg-[#ff3700] text-white duration-300 !cursor-pointer border-0 rounded hover:!text-[#ff3700] hover:!bg-white" onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show less" : "Show More"}
            </button>
        </>
    );
}

export default GameDescription;
