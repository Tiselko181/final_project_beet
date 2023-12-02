import { useState, useEffect } from 'react';
import HeroContent from '../components/hero/HeroContent';
import HeroSwiper from '../components/hero/HeroSwiper';
import DownBtn from '../components/btns/DownBtn';
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
        <section className='relative w-full min-h-screen px-[100px] py-0 overflow-hidden duration-500 after:absolute after:content-[""] after:w-full after:h-full after:bg-[#12121299] after:inset-x-0 after:inset-y-0'>
            {games.map((game) => {
                if (game.active) {
                    return (
                        <React.Fragment key={game._id}>
                            <div className='pt-[120px] px-[100px] top-0 left-0 w-full h-screen flex justify-between items-center flex-wrap overflow-hidden pb-[100px]'>
                                <img src={game.bgImg} alt="background" className={`bgImg ${game.active ? 'active' : undefined}`} />
                                <div className='lg:w-2/4 w-full'>
                                    <HeroContent game={game} />
                                </div>
                                <div className='lg:w-2/4 w-full'>
                                    {games && games.length > 0 && <HeroSwiper slides={games} slideChange={handleSlideChange} />}
                                    {/* <HeroDate game={game} /> */}
                                    {/* <PlayBtn game={game} /> */}
                                </div>
                            </div>
                            <DownBtn />
                        </React.Fragment>
                    )
                }
            })},
        </section>
    );
}

export default Hero;
