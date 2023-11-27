import PropTypes from "prop-types";

ScrollTop.propTypes = {
    scroll: PropTypes.number,
};

const scrollTopClass = "fixed bottom-[15px] right-[15px] scrolldown z-[1100] invisible opacity-0 before:content-[''] before:absolute before:bottom-[6px] before:left-[39%] before:w-[6px] before:h-[6px] ml-[-3px] before:bg-[#ff3700] before:rounded-full before:box-border before:animationScrollup";

function ScrollTop({ scroll }) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    return (
        <a href="#" onClick={scrollToTop} className={`${scrollTopClass} ${scroll > 100 ? 'scroll-active' : undefined}`}>
            <div className="pt-[6px] ml-[-3px] mt-12 w-[30px] flex flex-col items-center">
                <div className="chevronup"></div>
                <div className="chevronup"></div>
            </div>
        </a>
    );
}

export default ScrollTop;
