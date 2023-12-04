import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


HeroSwiper.propTypes = {
    slides: PropTypes.array,
    slideChange: PropTypes.func,
};

function HeroSwiper({ slides, slideChange }) {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            coverflowEffect={{
                rotate: 35,
                stretch: -10,
                depth: 50,
                modifier: 1,
                slideShadows: true,
            }}
            loop={true}
            modules={[EffectCoverflow, Autoplay]}
            className="lg:mt-8 mt-8 mb-4 lg:py-[70px] py-3 lg:w-[35vw] bg-[#00000018] rounded backdrop-blur-[20px] shadow-[0_0_30px] shadow-[#ffffff6b]"
        >
            {
                slides.map((slide) =>
                    <SwiperSlide key={slide._id} className="bg-center bg-cover w-[170px] h-[220px]">
                        <img src={slide.previewImg} alt="Game Poster Preview" className="block w-full h-full object-cover rounded shadow-[0_0_7px] shadow-[#ffffff3e]" onClick={() => slideChange(slide._id)} />
                    </SwiperSlide>)
            }
        </Swiper>
    );
}

export default HeroSwiper;
//className="absolute py-[35px] bottom-5 left-1/2 translate-x-[-50%] w-[45vw] bg-[#0000004d] backdrop-blur-[20px] shadow-[#ffffff80]"
