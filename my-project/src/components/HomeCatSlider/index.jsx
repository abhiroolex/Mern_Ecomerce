import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";

const HomeCatSlider =() => {
    return(
        <div className="homeCatSlider pt-4 py-8 pb">
            <div className="container">
            <Swiper
        slidesPerView={6}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper">

            
        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white  text-center flex items-center 
            justify-center flex-col w-full rounded-lg">
                
                <img src="fashion1.png"
                className="w-[60px] transition-all" alt="fashion" />
                    <h3 className="text-[16px] font-[500] mt-3">Fashion</h3>
            </div>
            </Link>
        </SwiperSlide>

       
        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white  text-center flex items-center 
            justify-center flex-col w-full rounded-lg">
                <img src="electronics1.png"
                className="w-[60px] transition-all" alt="fashion" />
                    <h3 className="text-[16px] font-[500] mt-3">Electronics</h3>
            </div>
            </Link>
        </SwiperSlide>

        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white text-center flex items-center 
            justify-center flex-col w-full rounded-lg">
                <img src="bags.png"
                className="w-[70px] transition-all" alt="fashion" />
                    <h3 className="text-[16px] font-[500] mt-3">Bags</h3>
            </div>
            </Link>
        </SwiperSlide>


        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white  text-center flex items-center 
            justify-center flex-col w-full rounded-lg">
                <img src="footwear.png"
                className="w-[45px] transition-all" alt="fashion" />
                    <h3 className="text-[16px] font-[500] mt-3">Footwear</h3>
            </div>
            </Link>
        </SwiperSlide>


        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white  text-center flex items-center 
            justify-center flex-col w-full rounded-lg">
                <img src="groceries.png"
                className="w-[51px] transition-all" alt="fashion" />
                    <h3 className="text-[16px] font-[500] mt-3">Groceries</h3>
            </div>
            </Link>
        </SwiperSlide>


        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white text-center flex items-center 
            justify-center flex-col w-full rounded-lg">
                <img src="beauty.png"
                className="w-[58px] transition-all" alt="fashion" />
                    <h3 className="text-[16px] font-[500] mt-3">Beauty</h3>
            </div>
            </Link>
        </SwiperSlide>


        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white  text-center flex items-center 
            justify-center flex-col w-full rounded-lg">
                <img src="wellness.png"
                className="w-[66px] transition-all" alt="fashion" />
                    <h3 className="text-[16px] font-[500] mt-3">wellness</h3>
            </div>
            </Link>
        </SwiperSlide>


        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white  text-center flex items-center 
            justify-center flex-col w-full rounded-lg">
                <img src="jewelery.png"
                className="w-[51px] transition-all" alt="fashion" />
                    <h3 className="text-[16px] font-[500] mt-3">Jewellery</h3>
            </div>
            </Link>
        </SwiperSlide>

        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white  text-center flex items-center 
            justify-center flex-col w-full rounded-lg">
                <img src="other1.png"
                className="w-[53px] transition-all" alt="fashion" />
                    <h3 className="text-[16px] font-[500] mt-3">Fashion</h3>
            </div>
            </Link>
        </SwiperSlide>

        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white  text-center flex items-center 
            justify-center flex-col w-full rounded-lg">
                <img src="other2.png"
                className="w-[54px] transition-all" alt="fashion" />
                    <h3 className="text-[16px] font-[500] mt-3">Fashion</h3>
            </div>
            </Link>
        </SwiperSlide>

        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white text-center flex items-center 
            justify-center flex-col w-full rounded-lg">
                <img src="other3.png"
                className="w-[37px] transition-all" alt="fashion" />
                    <h3 className="text-[16px] font-[500] mt-3">Fashion</h3>
            </div>
            </Link>
        </SwiperSlide>


        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white text-center flex items-center 
            justify-center flex-col w-full rounded-lg">
                <img src="other4.png"
                className="w-[49px] transition-all" alt="fashion" />
                    <h3 className="text-[16px] font-[500] mt-3">Fashion</h3>
            </div>
            </Link>
        </SwiperSlide>



       
        
      </Swiper>

            </div>
        </div>
    )
}

export default HomeCatSlider;