import React from 'react';
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../../components/AdsBannerSlider';
import AdsBannerSliderV2 from '../../components/AdsBannerSliderV2';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import ProductsSlider from '../../components/ProductsSlider';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import BolgsItem from '../../components/BlogItem';

import HomeBannerV2 from '../../components/HomeSliderV2';
import BannerBox from '../../components/BannerBox';
import BannerBoxV2 from '../../components/bannerBoxV2';


 const Home = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  

    return(
        <>
       <HomeSlider/>
        <section className="py-6">
            <div className="container flex gap-5">
            <div className="part1 w-[70%]">
            <HomeBannerV2/>
            </div>

            <div className="part2 w-[30%] flex items-center gap-5 justify-between flex-col">
                <BannerBoxV2 info="left" image={"sub-banner-1.jpg"}/>
                <BannerBoxV2 info="right" image={"sub-banner-2.jpg"}/>
            </div>
            </div>
        </section>

        <HomeCatSlider/>



        <section className="bg-white py-8">
            <div className="container">
            <div className="flex items-center justify-between">

                    <div className="lefSec">
                        <h2 className="text-[20px] font-[600]">POPULAR PRODUCTS</h2>
                        <p className="text-[14px] font-[400]">Do not miss the cuurent
                             offers until the end of March.</p>
                    </div>

                    <div className="rightSec w-[60%]">
                    <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Fashion" />
        <Tab label="Electronics" />
        <Tab label="Bags" />
        <Tab label="Footwear" />
        <Tab label="Groceries" />
        <Tab label="Beauty" />
        <Tab label="Wellness" />
        <Tab label="Jewelery" />
        <Tab label="Cosmetics" />
        <Tab label="Furnitures" />
      </Tabs>
                    </div>
                </div>

            <ProductsSlider items={5}/>

            </div>
        </section>

        <section className="py-4 pt-2 bg-white ">
            <div className="container">
                <div className="freeshipping w-[80%] m-auto py-2 p-2 border-2 border-[#ff5252] flex items-center
                justify-between rounded-md">
                    <div className="col1 flex items-center gap-4">
                    <LiaShippingFastSolid className="text-[50px]"/>
                    <span className="text-[20px] font-[600] uppercase">Free Shipping</span>
                    </div>
                    <div className="col2">
                        <p className="mb-0 font-[500]">Free Delivery On Your First Order and Over $200</p>
                    </div>

                    <p className="font-bold text-[25px]">-Only $200</p>
                

                </div>

                    <AdsBannerSliderV2 items={4}/>

            </div>
        </section>


        <section className="bg-white  py-5 pt-0  ">
            <div className="container">
            <h2 className="text-[20px] font-[600]">Latest Products</h2>
            <ProductsSlider items={5}/>

            <AdsBannerSlider items={3}/>


            </div>
        </section>



        <section className="bg-white  py-5 pt-0  ">
            <div className="container">
            <h2 className="text-[20px] font-[600]">Featured Products</h2>
            <ProductsSlider items={5}/>
            <AdsBannerSlider items={2}/>

        </div>
        </section>

        <section className="bg-white  py-5 pb-8 pt-0 blogSection ">
            <div className="container">
            <h2 className="text-[20px] font-[600] mb-4">From The Blog</h2>
                   <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        className="blogSlider">
                
                            
                        <SwiperSlide>
                            <BolgsItem/>

                        </SwiperSlide>


                        <SwiperSlide>
                            <BolgsItem/>

                        </SwiperSlide>


                        <SwiperSlide>
                            <BolgsItem/>

                        </SwiperSlide>



                        <SwiperSlide>
                            <BolgsItem/>

                        </SwiperSlide>



                        <SwiperSlide>
                            <BolgsItem/>

                        </SwiperSlide>


                        <SwiperSlide>
                            <BolgsItem/>

                        </SwiperSlide>
                        </Swiper>


            </div>
        </section>




        

        
           
        </>

        
    )
}

export default Home;