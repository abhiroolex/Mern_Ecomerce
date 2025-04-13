import React from "react";

import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnBold } from "react-icons/pi";
import { GiWallet } from "react-icons/gi";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoChatboxOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";





const Footer =() => {
    return(
    <>
        <footer className="py-6 bg-[#f1f1f1]">
            <div className="container">
                <div className="flex items-center justify-center gap-10 py-8 pb-8">
                    <div className="col flex items-center flex-col group w-[15%]">
                        <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-3"/>
                        <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
                        <p className="text-[12px] font-[500]">For all Orders Over Rs. 5000</p>
                    </div>

                    <div className="col flex items-center flex-col group w-[15%]">
                        <PiKeyReturnBold className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-3"/>
                        <h3 className="text-[16px] font-[600] mt-3">30 Days Returns</h3>
                        <p className="text-[12px] font-[500]">For an Exchange Product</p>
                    </div>

                    <div className="col flex items-center flex-col group w-[15%]">
                        <GiWallet className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-3"/>
                        <h3 className="text-[16px] font-[600] mt-3">Secured Payment</h3>
                        <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
                    </div>


                    <div className="col flex items-center flex-col group w-[15%]">
                        <LiaGiftSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-3"/>
                        <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
                        <p className="text-[12px] font-[500]">Our First Product Order</p>
                    </div>


                    <div className="col flex items-center flex-col group w-[15%]">
                        <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-3"/>
                        <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
                        <p className="text-[12px] font-[500]">Contact us Anytime</p>
                    </div>




                   

                </div>
                <br/>

                <hr/>

                <div className="footer flex  py-8">
                    <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">

                        <h2 className="text-[18px] font-[600] mb-4">Contact us</h2>

                        <p className="text-[14px] font-[400] pb-4">Zayvra - Mega Super Store<br/>
                            Online Shopping Center Nepal
                        </p>
                        <Link className="link text-[13px]" to="mailto:abhishes075@gmail.com">
                        zayvraabhishek@shoppingcenter.com</Link>

                        <span className="text-[22px] font-[600] block w-full mt-3 mb-5 text-primary">
                            (+977) 9829735326</span>

                            <div className="flex items-center gap-2">
                                <IoChatboxOutline className="text-[40px] text-primary "/>
                                <span className="text-[15px] font-[600] ">Online Chat<br/>
                                    Get Expert Help
                                </span>
                            </div>
                    </div>

                    <div className="part2 w-[40%] flex pl-8 ">
                        <div className="part2-_col1 w-[50%]">
                        <h2 className="text-[18px] font-[600] mb-4">Products</h2>
                            <ul className="list">
                                <li className="list-none text-[14px] w-full mb-2"><Link to="/" className
                                ="link">Price Drops</Link></li>


                                <li className="list-none text-[14px] w-full mb-2"><Link to="/" className
                                ="link">New Products</Link></li>

                                <li className="list-none text-[14px] w-full  mb-2"><Link to="/" className
                                ="link">Best Sales</Link></li>


                                <li className="list-none text-[14px] w-full mb-2"><Link to="/" className
                                ="link">Contact us</Link></li>



                                <li className="list-none text-[14px] w-full  mb-2"><Link to="/" className
                                ="link">Sitemap</Link></li>


                                <li className="list-none text-[14px] w-full  mb-2"><Link to="/" className
                                ="link">Stores</Link></li>


                            </ul>
                        </div>


                        <div className="part2-_col2 w-[50%]">
                        <h2 className="text-[18px] font-[600] mb-4">Our Company</h2>
                            <ul className="list">
                                <li className="list-none text-[14px] w-full mb-2"><Link to="/" className
                                ="link">Delivery</Link></li>


                                <li className="list-none text-[14px] w-full mb-2"><Link to="/" className
                                ="link">Legal Notice</Link></li>

                                <li className="list-none text-[14px] w-full  mb-2"><Link to="/" className
                                ="link">Terms And Conditions of Use</Link></li>


                                <li className="list-none text-[14px] w-full mb-2"><Link to="/" className
                                ="link">About Us</Link></li>



                                <li className="list-none text-[14px] w-full  mb-2"><Link to="/" className
                                ="link">Secure Payment</Link></li>


                                <li className="list-none text-[14px] w-full  mb-2"><Link to="/" className
                                ="link">Login</Link></li>


                            </ul>
                        </div>

                        
                    </div>

                    <div className="part2 w-[35%] flex pl-8 flex-col pr-8">
                    <h2 className="text-[18px] font-[600] mb-4">Subscribe To Newsletter</h2>
                    <p className="text-[16px]">subscribe to our latest
                         newsletter to get news about special discounts.</p>


                         <form className="mt-5 ">
                            <input type="text" className="w-full h-[45px] border outline-none pl-4
                             pr-4 rounded-lg mb-4 focus:border-[rgba(0,0,0,0.3)]" placeholder="Your Email Address"/>

                             <Button className="btn-org">SUBSCRIBE</Button>
                             <FormControlLabel control={<Checkbox/>} label="I agree to
                             the terms and conditions and the privacy p" />
                         </form>
                    </div>
                    
                </div>

            </div>
        </footer>



        <div className="bottonStrip bg-[rgba(194,190,190)] border-t border-[rgba(0,0,0,0.2)] py-3">
            <div className="container flex items-center justify-between">
            <ul className="flex items-center gap-2">
                <li className="list-none">
                    <Link to="/" target="_blank" className="w-[35px] h-[35px]
                     rounded-full border border-[rgba(0,0,0,0.1)] 
                     flex items-center justify-center group hover:bg-primary transition-all">
                    <FaFacebookF className="text-[15px] group-hover:text-white"/>
                    </Link>
                    </li>


                    <li className="list-none">
                    <Link to="/" target="_blank" className="w-[35px] h-[35px]
                     rounded-full border border-[rgba(0,0,0,0.1)] 
                     flex items-center justify-center group hover:bg-primary transition-all">
                    <AiOutlineYoutube className="text-[20px] group-hover:text-white"/>
                    </Link>
                    </li>



                    <li className="list-none">
                    <Link to="/" target="_blank" className="w-[35px] h-[35px]
                     rounded-full border border-[rgba(0,0,0,0.1)] 
                     flex items-center justify-center group hover:bg-primary transition-all">
                    <FaPinterestP className="text-[15px] group-hover:text-white"/>
                    </Link>
                    </li>



                    <li className="list-none">
                    <Link to="/" target="_blank" className="w-[35px] h-[35px]
                     rounded-full border border-[rgba(0,0,0,0.1)] 
                     flex items-center justify-center group hover:bg-primary transition-all">
                    <FaInstagram className="text-[15px] group-hover:text-white"/>
                    </Link>
                    </li>
            </ul>

            <p className="text-[13px] text-center mb-0">© 2025 - MERN Ecommerce Website by Abhishek Chaudhary</p>

            <div className="flex items-center">
                <img src="/footer1.png" alt="image"/>
                <img src="/footer2.png" alt="image"/>
                <img src="/footer3.png" alt="image"/>
                <img src="/footer4.png" alt="image"/>
                <img src="/footer5.png" alt="image"/>
            </div>

            </div>
        </div>
    </>
    )
}


export default Footer;