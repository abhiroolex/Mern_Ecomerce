import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay} from 'swiper/modules';

 const HomeSlider = () => {
    return(
     <div className="homeSlider py-4">
        <div className="container">
        <Swiper 
        loop={true}
        spaceBetween={10} 
        navigation={true}
         modules={[Navigation,Autoplay]}
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="sliderHome">
        
        <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
            <img src="banner3.jpg"
         alt="Banner slide" className="w-full"/>
         </div>
         </SwiperSlide>

        <SwiperSlide>
        <div className="item rounded-[20px] overflow-hidden">
            <img src="banner8.jpg"
         alt="Banner slide" className="w-full"/>
         </div>
         </SwiperSlide>

        <SwiperSlide>
        <div className="item rounded-[20px] overflow-hidden">
            <img src=
            "banner5.jpg"
         alt="Banner slide" className="w-full"/>
         </div>
         </SwiperSlide>

        <SwiperSlide>
        <div className="item rounded-[20px] overflow-hidden">
            <img src="banner6.jpg"
         alt="Banner slide" className="w-full"/>
         </div>
         </SwiperSlide>

         <SwiperSlide>
         <div className="item rounded-[20px] overflow-hidden">
            <img src="banner7.jpg"
         alt="Banner slide" className="w-full"/>
         </div>
         </SwiperSlide>

        

       

       
      </Swiper>
        </div>
     </div>
    )
}

export default HomeSlider;