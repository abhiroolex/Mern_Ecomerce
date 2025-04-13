import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import BannerBox from "../BannerBox";
import BannerBoxV2 from "../bannerBoxV2";

 const AdsBannerSlider = (props) => {
    return(
      <div className="py-5 w-full">
      <Swiper
              slidesPerView={props.items}
              spaceBetween={10}
              navigation={true}
              modules={[Navigation]}
              className="smlBtn">
      
                  
              <SwiperSlide>
                
               <BannerBoxV2 info="left" image={"sub-banner-1.jpg"}
               link={"/"}/>
              </SwiperSlide>

              <SwiperSlide> 
               <BannerBoxV2 info="right" image={"sub-banner-2.jpg"}/>
              </SwiperSlide>

              <SwiperSlide> 
               <BannerBoxV2 info="left" image={"sub-banner-1.jpg"}/>
              </SwiperSlide>

              <SwiperSlide> 
               <BannerBoxV2 info="right" image={"sub-banner-2.jpg"}/>
              </SwiperSlide>

              <SwiperSlide> 
               <BannerBoxV2 info="left" image={"sub-banner-1.jpg"}/>
              </SwiperSlide>

              <SwiperSlide> 
               <BannerBoxV2 info="right" image={"sub-banner-2.jpg"}/>
              </SwiperSlide>
              </Swiper>
      </div>
    );
};

export default AdsBannerSlider;