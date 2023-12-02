import PropTypes from "prop-types";

GameGenres.propTypes = {
    genre: PropTypes.object,
};

function GameGenres({ genre }) {
    return (
        <>
            <span className="relative font-extralight tracking-widest px-3 pt-3 pb-10 after:absolute after:content-['|'] after:right-[-2px] after:last-of-type:content-['']">{genre.name}</span>
        </>
    );
}

export default GameGenres;
