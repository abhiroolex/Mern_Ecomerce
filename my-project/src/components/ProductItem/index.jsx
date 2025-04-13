import React from "react";
import "../ProductItem/style.css";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { MdZoomOutMap } from "react-icons/md";

const ProductItem = ({ imageUrl, title, label, price, oldPrice, productUrl }) => {
    return (
        <div className="productItem shadow-lg rounded-lg overflow-hidden border-1 border-[rgba(0,0,0,0.1)]">
            <Link to="/">
            <div className="group imgWrapper w-full h-[220px] overflow-hidden relative">
                
                <a href={productUrl} target="_blank" rel="noopener noreferrer">
                    <img src={imageUrl} className="w-full" alt="Product" />
                    <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">10%</span>
                </a>
                

                <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
                    <Button className="!w-[35px] !h-[45px] !min-w-[45px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group">
                        <MdZoomOutMap className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
                    </Button>

                    <Button className="!w-[35px] !h-[45px] !min-w-[45px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group">
                        <IoMdGitCompare className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
                    </Button>

                    <Button className="!w-[35px] !h-[45px] !min-w-[45px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group">
                        <FaRegHeart className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
                    </Button>
                </div>
            </div>
            </Link>


            <Link to="/">
            <div className="info p-3 py-5">
                <h6 className="text-[13px]">
                    <a href={productUrl} target="_blank" rel="noopener noreferrer" className="link transition-all">{label}</a>
                </h6>
                <h3 className="text-[13px] title mt-1 font-[500] mb-1 text-[#000]">
                    <a href={productUrl} target="_blank" rel="noopener noreferrer" className="link transition-all">{title}</a>
                </h3>

                <Rating name="size-small" defaultValue={4} size="small" readOnly />
                <div className="flex items-center gap-4">
                    <a href={productUrl} target="_blank" rel="noopener noreferrer" className="link transition-all">
                        <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">Rs. {oldPrice}</span>
                    </a>
                    <a href={productUrl} target="_blank" rel="noopener noreferrer" className="link transition-all">
                        <span className="newPrice text-primary text-[15px] font-[600]">Rs. {price}</span>
                    </a>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default ProductItem;