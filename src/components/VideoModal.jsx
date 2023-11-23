import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";
// import PlayBtn from '../components/PlayBtn';

VideoModal.propTypes = {
    game: PropTypes.object,
    toogleVideoModal: PropTypes.func,
    status: PropTypes.bool,
};

function VideoModal({ game, toogleVideoModal, status }) {
    return (
        <div className={`videoModal ${status ? 'flex' : undefined}`}>
            <a href="#"
                className="absolute top-[30px] right-[30px] cursor-pointer "
                onClick={toogleVideoModal}>
                <IoMdClose className="fill-white" />
            </a>
            <iframe
                width="1280"
                height="720"
                src={game.video}
                title={`${game.title} | Game Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="max-w-[1280px] max-h-[720px]">
            </iframe>
        </div>
    );
}

export default VideoModal;
