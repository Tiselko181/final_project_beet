import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import PropTypes from "prop-types";

VideoModal.propTypes = {
    game: PropTypes.object,
    status: PropTypes.bool,
};

function VideoModal({ game }) {
    const [videoModal, setVideoModal] = useState(false);

    const toogleVideoModal = () => {
        setVideoModal(!videoModal)
    }

    return (
        <div className={`videoModal ${status ? 'flex' : undefined}`}>
            <button
                className="absolute top-[30px] right-[30px] cursor-pointer "
                onClick={toogleVideoModal}>
                <IoMdClose className="fill-white" />
            </button>
            <iframe
                width="1280"
                height="720"
                src={game.video}
                title={`${game.name} | Game Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="max-w-[1280px] max-h-[720px]">
            </iframe>
        </div>
    );
}

export default VideoModal;
