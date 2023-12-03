import { useEffect, useState } from 'react';
import GameThumbnail from "../../layouts/games/GameThumbnail";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-coverflow';


function MostPopular() {
    const [games, setGames] = useState([]);

    const fetchGames = () => {
        fetch('https://rawg.io/api/collections/must-play/games')
            .then(resp => resp.json())
            .then(({ results }) => setGames(results))
            .catch(error => console.error('Error fetching data:', error));
    }

    useEffect(() => {
        fetchGames()
    }, [])

    return (
        <section className='pt-20 pb-20 px-10 relative w-full snap-always'>
            <h2 className='px-20 relative text-2xl uppercase tracking-wide titleEffect pb-11 mb-5 pt-2.5 z-50'>Must-play:</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'6'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                modules={[EffectCoverflow, Autoplay]}
                className="py-[30px] w-[75vw] bg-[#00000018] rounded backdrop-blur-[20px] shadow-[0_0_30px] shadow-[#ffffff6b]"
            >
                {
                    games && games.length > 0 && games.map(
                        (game) => {
                            return (
                                <SwiperSlide key={game.id} >
                                    <GameThumbnail game={game} />
                                </SwiperSlide>
                            )
                        }

                    )
                }
            </Swiper>
        </section>
    );
}

export default MostPopular;

