import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

function GoBackDtn() {
    const navigate = useNavigate();

    return (
        <button onClick={() => {
            navigate(-1);
        }} className="group z-[1000] top-28 left-9 absolute inline-flex items-center gap-2.5 mr-[15px] py-[5px] px-4 no-underline text-l font-normal tracking-[1px] uppercase duration-300 !cursor-pointer border-0 rounded text-white hover:text-[#ff3700]">
            <IoArrowBack /> back
        </button>
    );
}

export default GoBackDtn;
