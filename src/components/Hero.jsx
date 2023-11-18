import { useState, useEffect } from 'react';
import bgImg from '../assets/images/destiny2_bg.jpg';
import titleImg from '../assets/images/destiny2_title.png';
import { IoPlayOutline } from "react-icons/io5";

const contentSpan = "px-2.5 py-0 border-r border-[#ffffff99] last-of-type:border-r-0 first-of-type:border-l-0";

function Hero() {
    const [games, setGames] = useState([]);

    const fetchDataGames = () => {
        fetch('http://localhost:5173/data/heroBannerData.json')
            .then(res => res.json())
            .then(data => setGames(data))
            .catch(error => console.log(error.message));
    };

    useEffect(() => {
        fetchDataGames()
    }, []);

    return (
        <div className='relative w-full min-h-screen px-[100px] py-0 overflow-hidden duration-500 after:absolute after:content-[""] after:w-full after:h-full after:bg-[#12121299] after:inset-x-0 after:inset-y-0'>
            <div className='py-0 px-[100px] top-0 left-0 w-full h-screen flex justify-between items-center overflow-hidden pb-[100px]'>
                <img src={bgImg} alt="background" className='absolute top-0 left-0 w-full h-full object-cover object-center invisible duration-1000 opacity-0 text-9xl bgImg-active' />
                <div className='w-2/4 md:w-full'>
                    <div className='relative invisible opacity-0 duration-1000 z-[900] scale-0 content-active'>
                        <img src={titleImg} alt="game_title" className='max-w-[250px] mb-5' />
                        <h4 className='text-[#ffffff99] font-normal text-3xl'>
                            <span className={contentSpan}>Year</span>
                            <span className={contentSpan}><i className="text-white py-0 px-2 rounded-sm inline-block bg-[#ff3700]">waiting</i></span>
                            <span className={contentSpan}>genre</span>
                        </h4>
                        <p className='text-base font-normal text-white mx-0 mt-5 mb-5'>description</p>
                        <div>Button</div>
                    </div>
                </div>
                <div className='w-2/4 md:w-full'>
                    <div className='relative invisible opacity-0 scale-0 duration-1000 z-[900] content-active'>
                        <h2 className='font-["Racing_Sans_One"] text-white uppercase text-[115px] items-center mb-5 drop-shadow-[0_0_20px_#ffffffcc] webkit-mask pl-[30px]'>On date</h2>
                    </div>
                    <div className='relative invisible opacity-0 scale-0 z-[900] content-active flex justify-center items-center'>
                        <a href="#" className='blurRoundBtn before:absolute before:inset-x-[-5px] before:inset-y-[-5px] before:content-[""] before:bg-transparent before:rounded-full before:border-[10px] before:animate-pulse animate-blurKeyframe'>
                            <IoPlayOutline className='text-[40px] stroke-[#ff3700]' />
                        </a>
                        <p className='text-[#ff3700] text-2xl ml-5 mb-0'>Watch Trailer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
