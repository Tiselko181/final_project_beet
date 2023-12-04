import { useEffect, useState } from 'react';
import { URL } from "../../data/getData";
import { platformsEndpoint, tokenKey } from "../../config/config";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/effect-coverflow';

function Platforms() {
    const [platforms, setPlatforms] = useState([]);

    const fetchGames = () => {
        fetch(`${URL}${platformsEndpoint}${tokenKey}`)
            .then(resp => resp.json())
            .then(({ results }) => setPlatforms(results))
            .catch(error => console.error('Error fetching data:', error));
    }

    useEffect(() => {
        fetchGames()
    }, [])

    return (
        <section className='lmd:py-16 sm:py-10 py-5 px-10 w-full snap-always'>
            <h2 className='md:px-20 px-6 relative md:text-2xl uppercase tracking-wide titleEffect pb-11 mb-5 pt-2.5 z-50'>Platforms:</h2>
            <Swiper
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'6'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className='flex place-content-center'
            >
                {
                    platforms && platforms.length > 0 && platforms.map(
                        (platform) => {
                            return (
                                <SwiperSlide key={platform.id} >
                                    <img src={`../../../public/assets/platforms/${platform.id}.png`} alt={platform.name} className='w-[100px] h-[140] object-cover' />
                                </SwiperSlide>
                            )
                        }

                    )
                }
            </Swiper>
        </section>
    );
}

export default Platforms;
