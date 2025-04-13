
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import ProductItem from "../ProductItem";

const ProductsSlider = ({ items }) => {
    const productList = [
        {
            imageUrl:"https://img.drz.lazcdn.com/g/kf/Scae1ec23b06043ee91b68eabace8cd3aV.jpg_150x150q80.avif",

            label: "Casual Wear",
            name: "Slim Fit Jeans for Men",
            oldPrice: 1999,
            price: 1499,
            rating: 4.5
        },
        {
            imageUrl:  "https://img.drz.lazcdn.com/static/np/p/b801ee765a995b2e27808a4830ea9135.jpg_150x150q80.avif",
            label: "T-Shirts",
            name: "Classic White Cotton Tee",
            oldPrice: 899,
            price: 699,
            rating: 4.2
        },
        {
            imageUrl: "https://img.drz.lazcdn.com/static/np/p/9196c381a8457bd90f04e0906fca1909.jpg_150x150q80.avif",
            label: "Outerwear",
            name: "Men's Bomber Jacket",
            oldPrice: 2599,
            price: 1999,
            rating: 4
        },
        {
            imageUrl:  "https://img.drz.lazcdn.com/static/np/p/6faf135e25db03151f700676a1f3492c.jpg_150x150q80.avif",
            label: "Footwear",
            name: "Sneakers Black Edition",
            oldPrice: 3499,
            price: 2899,
            rating: 4.8
        },

        {
              imageUrl:"https://img.drz.lazcdn.com/static/np/p/5641a3bb0d14b82868a09201e656173b.jpg_150x150q80.avif",

              label: "Footwear",
              name: "Sneakers Black Edition",
              oldPrice: 3499,
              price: 2899,
              rating: 4.8
          },

          {
              imageUrl: "https://img.drz.lazcdn.com/static/np/p/9b3dc5bce7e7633639c101519d58604d.jpg_150x150q80.avif",
              label: "Footwear",
              name: "Sneakers Black Edition",
              oldPrice: 3499,
              price: 2899,
              rating: 4.8,
              productUrl: "https://www.daraz.com.np/products/skinny-fit-formal-pant-for-mens-i125633208-s1037497862.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Afashion%253Bnid%253A125633208%253Bsrc%253ALazadaMainSrp%253Brn%253A91e008e89152ec541e6e190b4e87c179%253Bregion%253Anp%253Bsku%253A125633208_NP%253Bprice%253A1292%253Bclient%253Adesktop%253Bsupplier_id%253A900151182258%253Bbiz_source%253Ahttps%253A%252F%252Fwww.daraz.com.np%252F%253Bslot%253A36%253Butlog_bucket_id%253A470687%253Basc_category_id%253A1802%253Bitem_id%253A125633208%253Bsku_id%253A1037497862%253Bshop_id%253A23551%253BtemplateInfo%253A1104_L%2523-1_A3_C%2523&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Madhesh%20Province&price=1292&priceCompare=skuId%3A1037497862%3Bsource%3Alazada-search-voucher%3Bsn%3A91e008e89152ec541e6e190b4e87c179%3BoriginPrice%3A129200%3BdisplayPrice%3A129200%3BsinglePromotionId%3A50000010806010%3BsingleToolCode%3ApromPrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1744171888465&ratingscore=3.9857142857142858&request_id=91e008e89152ec541e6e190b4e87c179&review=280&sale=899&search=1&source=search&spm=a2a0e.searchlist.list.36&stock=1" // Add the product URL here
          },

          {
              imageUrl:"https://img.drz.lazcdn.com/g/kf/S9203a328a9fa41baaf4ebeb272deb70df.jpg_150x150q80.avif",
              label: "Footwear",
              name: "Sneakers Black Edition",
              oldPrice: 3499,
              price: 2899,
              rating: 4.8
          },

          {
              imageUrl: "https://img.drz.lazcdn.com/static/np/p/72b45de96c4430d94a48cbe42b62183f.jpg_150x150q80.avif",
              label: "Footwear",
              name: "Sneakers Black Edition",
              oldPrice: 3499,
              price: 2899,
              rating: 4.8
          }
    ];

    return (
        <div className="productsSlider py-3">
            <Swiper
                slidesPerView={items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {productList.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ProductItem
                            imageUrl={item.imageUrl}
                            label={item.label}
                            name={item.name}
                            oldPrice={item.oldPrice}
                            price={item.price}
                            rating={item.rating}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductsSlider;
