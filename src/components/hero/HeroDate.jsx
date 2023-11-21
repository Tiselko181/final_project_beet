import PropTypes from "prop-types";

HeroDate.propTypes = {
    game: PropTypes.object,
};

function HeroDate({ game }) {
    return (
        <div className={`content ${game.active ? 'content-active' : undefined}`}>
            <h2
                className='font-["Racing_Sans_One"] text-white uppercase text-[7rem] leading-snug text-center px-2.5 mb-5 drop-shadow-[0_0_15px_#ffffffcc] webkit-mask'>
                {game.date}
            </h2>
        </div>
    );
}

export default HeroDate;
