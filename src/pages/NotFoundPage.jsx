import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GiUnlitBomb } from "react-icons/gi";

function NotFoundPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => { clearTimeout(timeout); };
    }, [navigate]);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="text-[#ff3700] text-center text-[148px] flex">O<GiUnlitBomb className="rotate-90 self-center mt-10 text-[100px]" />ps!</div>
            <p className="text-[#a6a5a5] text-center text-xl">( 404 ) Not Found Page</p>
            <button onClick={() => {
                navigate(-1);
            }} className="mt-10 px-10 py-5 border border-[#ff3700] rounded text-xl">
                Go back
            </button>
        </div>
    );
}

export default NotFoundPage;
