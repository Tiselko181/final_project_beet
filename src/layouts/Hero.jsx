import { useState, useEffect } from 'react';
import bgImg from '../assets/images/destiny2_bg.jpg';
import HeroBlockContent from '../components/HeroBlockContent';
import HeroDate from '../components/HeroDate';
import PlayBtn from '../components/PlayBtn';

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
                    <HeroBlockContent />
                </div>
                <div className='w-2/4 md:w-full'>
                    <HeroDate />
                    <PlayBtn />
                </div>
            </div>
        </div>
    );
}

export default Hero;
