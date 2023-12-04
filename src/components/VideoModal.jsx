import { IoCloseCircleOutline } from "react-icons/io5";
import PropTypes from "prop-types";

VideoModal.propTypes = {
    game: PropTypes.object,
    toogleVideoModal: PropTypes.func,
    status: PropTypes.bool,
};

function VideoModal({ game, status, toogleVideoModal }) {

    return (
        <div className={`videoModal ${status ? 'scroll-active' : undefined}`}>
            <div className="flex justify-center items-center absolute bottom-[620] xl:top-[-620px] xl:left-[-10%] after:content-[''] after:bg-[#00000050] after:w-[screen] after:h-[screen] shadow-[0_0_100px] shadow-[#ffffff6b]">
                <button
                    className="absolute top-[-70px] right-[-80px] cursor-pointer "
                    onClick={toogleVideoModal}>
                    <IoCloseCircleOutline size={40} className="fill-white cursor-pointer absolute top-7 right-[60px] xs:right-[80px] xl:right-7" />
                </button>
                <iframe
                    width="1280"
                    height="720"
                    src={game.video}
                    title={`${game.name} | Game Trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="max-w-[280px] xs:max-w-[480px] max-h-[180px] xs:max-h-[300px] lg:max-w-[1080px] lg:max-h-[940px] xl:max-w-[1280px] xl:max-h-[720px]">
                </iframe>
            </div>
        </div>
    );
}

export default VideoModal;
