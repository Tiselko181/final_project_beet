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
            .then(({ results }) => {
                window.localStorage.setItem('mustPlayGames', JSON.stringify(results));
                setGames(results);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    useEffect(() => {
        const storedGames = JSON.parse(window.localStorage.getItem('mustPlayGames'));
        if (storedGames) {
            setGames(storedGames);
        } else {
            fetchGames();
        }
    }, []);

    return (
        <section className='lmd:pt-36 lmd:pb-28 sm:py-10 pt-20 pb-16 px-10 relative w-full snap-always'>
            <h2 className='md:px-20 px-6 relative md:text-2xl uppercase tracking-wide titleEffect flex pb-11 mb-5 pt-2.5 z-50'>Must-play:</h2>
            <Swiper
                spaceBetween={-120}
                // setWrapperSize={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        width: 200
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    865: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: -10,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: -10,
                    },
                    1300: {
                        slidesPerView: 4,
                        spaceBetween: -75,
                    },
                    1400: {
                        slidesPerView: 5,
                        spaceBetween: -135,
                    },
                    1500: {
                        slidesPerView: 5,
                        spaceBetween: -105
                    },
                    1630: {
                        slidesPerView: 7,
                        spaceBetween: -130
                    }
                }}
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
                }}
                loop={true}
                modules={[EffectCoverflow, Autoplay]}
                className="py-[30px] w-[75vw] bg-[#00000018] rounded backdrop-blur-[20px] shadow-[0_0_30px] shadow-[#ffffff6b]"
            >
                {
                    games && games.length > 0 && games.map(
                        (game) => {
                            return (
                                <SwiperSlide key={game.id} className='w-full'>
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

