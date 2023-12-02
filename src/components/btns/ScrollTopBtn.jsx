import PropTypes from "prop-types";
<<<<<<< HEAD
import scrollToTopFunc from "../utility/scrollTo";
=======
import scrollToTopFunc from "../../utility/scrollToTopFunc";
>>>>>>> eae3fb0 (roll back and fixed genres, search, gameList)

ScrollTopBtn.propTypes = {
    scroll: PropTypes.number,
};

const scrollTopClass = "fixed bottom-[15px] right-[15px] scrolldown z-[1100] invisible opacity-0 before:content-[''] before:absolute before:bottom-[6px] before:left-[39%] before:w-[6px] before:h-[6px] ml-[-3px] before:bg-[#ff3700] before:rounded-full before:box-border before:animationScrollup";

function ScrollTopBtn({ scroll }) {
    return (
        <button onClick={scrollToTopFunc} className={`${scrollTopClass} ${scroll > 100 ? 'scroll-active' : undefined}`}>
            <div className="pt-[6px] ml-[-3px] mt-12 w-[30px] flex flex-col items-center">
                <div className="chevronup"></div>
                <div className="chevronup"></div>
            </div>
        </button>
    );
}

export default ScrollTopBtn;
