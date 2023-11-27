import { useState, useEffect } from 'react';
import HeroContent from '../components/hero/HeroContent';

import HeroSwiper from '../components/hero/HeroSwiper';
import DownBtn from '../components/hero/DownBtn';
import React from 'react';


function Hero() {
    const [games, setGames] = useState([]);

    const fetchHeroDataGames = () => {
        fetch('http://localhost:5173/data/heroBannerData.json')
            .then(res => res.json())
            .then(data => setGames(data))
            .catch(error => console.error('Error fetching data:', error));
    };

    useEffect(() => {
        fetchHeroDataGames()
    }, []);

    const handleSlideChange = id => {
        setGames(prevGames => {
            return prevGames.map(game => {
                return {
                    ...game,
                    active: game._id === id
                };
            });
        });
    };

    return (
        <div className='relative w-full min-h-screen px-[100px] py-0 overflow-hidden duration-500 after:absolute after:content-[""] after:w-full after:h-full after:bg-[#12121299] after:inset-x-0 after:inset-y-0'>
            {games.map((game) => {
                if (game.active) {
                    return (
                        <React.Fragment key={game._id}>
                            <section className='py-1.5 px-[100px] top-0 left-0 w-full h-screen flex justify-between items-center overflow-hidden pb-[100px]'>
                                <img src={game.bgImg} alt="background" className={`bgImg ${game.active ? 'active' : undefined}`} />
                                <div className='w-2/4 md:w-full'>
                                    <HeroContent game={game} />
                                </div>
                                <div className='w-2/4 md:w-full'>
                                    {games && games.length > 0 && <HeroSwiper slides={games} slideChange={handleSlideChange} />}
                                    {/* <HeroDate game={game} /> */}
                                    {/* <PlayBtn game={game} /> */}
                                </div>
                            </section>
                            <DownBtn />
                        </React.Fragment>
                    )
                }
            })},
        </div>
    );
}

export default Hero;
