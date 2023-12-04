
function DownBtn() {
    return (
        <button onClick={() => window.scrollTo({ top: 1000, left: 0, behavior: 'smooth' })} className="absolute cursor-pointer bottom-[10%] left-1/2 scrolldown before:content-[''] before:absolute before:bottom-[30px] before:left-[39%] before:w-[6px] before:h-[6px] ml-[-3px] before:bg-[#ff3700] before:rounded-full before:box-border before:animationScrolldown z-[800]">
            <div className="pt-[6px] ml-[-3px] mt-12 w-[30px] flex-col items-center hidden">
                <div className="chevrondown"></div>
                <div className="chevrondown"></div>
            </div>
        </button>
    );
}

export default DownBtn;
