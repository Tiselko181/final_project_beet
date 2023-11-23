// import { IoMdArrowDown } from "react-icons/io";

function DownBtn() {
    return (
        // <a href="#" className="border-white w-12 h-12 border-2 rounded-full absolute bottom-[10%] left-1/2 flex justify-center items-center animate-pulse"><IoMdArrowDown className="fill-white" /></a>
        <a href="#">
            <div className="absolute bottom-[10%] left-1/2 scrolldown before:content-[''] before:absolute before:bottom-[30px] before:left-[39%] before:w-[6px] before:h-[6px] ml-[-3px] before:bg-[#ff3700] before:rounded-full before:box-border before:animationScrolldown">
                <div className="pt-[6px] ml-[-3px] mt-12 w-[30px] flex flex-col items-center">
                    <div className="chevrondown"></div>
                    <div className="chevrondown"></div>
                </div>
            </div>
        </a>
    );
}

export default DownBtn;
