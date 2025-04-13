import Button from "@mui/material/Button";
import React, { useState } from "react"
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/style.css"




 const Navigation = () => {

    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

         const openCategoryPanel=() =>{
            setIsOpenCatPanel(true);
         }

    return(
       <>
        <nav>
            <div className="container flex items-center justify-end gap-8">
                <div className="col_1 w-[25%]">
                    <Button className="!text-black gap-2 w-full" onClick={openCategoryPanel}>
                        <RiMenu2Fill className="text-[18px]"/>
                        Shop By Categories
                        <LiaAngleDownSolid className="text-[13px] ml-auto font-bold"/>
                        </Button>
                </div>

                <div className="col_2 w-[60%] ">
                    <ul className="flex items-center gap-3 nav">
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition text-black !font-[500] !text-[rgba(0,0,0,0.9)]
                            hover:!text-[#ff5252] !py-4">Home</Button>
                            </Link>
                        </li>

                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition text-black !font-[500] !text-[rgba(0,0,0,0.9)]
                            hover:!text-[#ff5252] !py-4">Fasion</Button></Link>
                            
                            <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white
                            shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full relative">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Men</Button>

                                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">T-shirt</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Jeans</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Shoes</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Watch</Button>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Perfume</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>

                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Women</Button>
                           <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Jewelry</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Bags</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Shoes</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Watch</Button>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Perfume</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Pants</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">T-shirts</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Sunglass</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Kids</Button>
                             <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                     

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Bags</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Shoes</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Watch</Button>
                                             </Link>

                                        </li>
                                        

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Pants</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">T-shirts</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Sunglass</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Girls</Button>
                                <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Jewelry</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Bags</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Shoes</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Watch</Button>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Perfume</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Pants</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">T-shirts</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Sunglass</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Boys</Button>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                       

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Bags</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Shoes</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Watch</Button>
                                             </Link>

                                        </li>
                                        
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Pants</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">T-shirts</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Sunglass</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>

                        </li>
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition text-black !font-[500] !text-[rgba(0,0,0,0.9)]
                            hover:!text-[#ff5252]!py-4">Electronics</Button></Link>
                            <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white
                            shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full relative">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Smart Phones</Button>

                                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Samsung</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Xiaomi</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Oppo</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Vivo</Button>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Huawei</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>

                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Keypad Phones</Button>
                           <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Nokia</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Samsung</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Lava</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Itel</Button>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Micromax</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Jio</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Carbon</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Motorola</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Laptop</Button>
                             <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                     

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">HP (Hewlett-Packard)</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Dell </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Lenovo </Button>
                                             </Link>

                                        </li>
                                        

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Apple </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Asus </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Acer </Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Speaker</Button>
                                <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Sony </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">JBL </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Bose </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Marshall</Button>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Kisonli</Button>
                                             </Link>
                                        </li>

                                       

                                    </ul>
                            </div>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Lights</Button>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                       

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">LED </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Bulbs</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">RGB Lights</Button>
                                             </Link>

                                        </li>
                                        
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Torch</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Solar Lights</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Lamp</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                        </li>
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition text-black !font-[500] !text-[rgba(0,0,0,0.9)]
                            hover:!text-[#ff5252]!py-4">Bags</Button></Link>
                        <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white
                            shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full relative">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">School Bags</Button>

                              

                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Traveling Bags</Button>
                        
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Trekking  Bags</Button>
                                     </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Suitcase</Button>
                                      </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Laptop Bags</Button>
                         
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                        </li>
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition text-black !font-[500] !text-[rgba(0,0,0,0.9)]
                            hover:!text-[#ff5252] !py-4">Footwear</Button></Link>
                    <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white
                            shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full relative">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Sneakers</Button>

                              

                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Boots</Button>
                        
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Trekking Shoes</Button>
                                     </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Formal Shoes</Button>
                                      </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Sport Shoes</Button>
                         
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                        </li>
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition text-black !font-[500] !text-[rgba(0,0,0,0.9)]
                            hover:!text-[#ff5252] !py-4">Groceries</Button></Link>
                        <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white
                            shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full relative">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Fruits & Vegetables</Button>

                                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Apples</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Bananas</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Oranges</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Potatoes</Button>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Onions</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>

                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Grains & Pulses</Button>
                           <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Rice</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Wheat Flour(ATTA)</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Lentils(DAL)</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Chickpeas(CHANA)</Button>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Kidney Beans(RAJMA)</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Oats</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Corn Flour</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Moong Dal</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Spices & Condiments</Button>
                             <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                     

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Salt</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Turmeric</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Chili Powder</Button>
                                             </Link>

                                        </li>
                                        

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Cumin Seeds</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Coriander Powder</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Musterd Oil</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Dairy Products</Button>
                                <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Milk Powder</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Cheese</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Butter</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Yogurt(CURD)</Button>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Ghee</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Paneer</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Ice-Cream</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Butter Milk</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Packeged Foods</Button>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                       

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Biscuits</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Noodles</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Pasta</Button>
                                             </Link>

                                        </li>
                                        
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Chips</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Jam</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Chocolates</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Bakery Items</Button>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                       

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Bread</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Buns</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Cake</Button>
                                             </Link>

                                        </li>
                                        
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Cookies</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Do-Nuts</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Cup Cake</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Household Essentials</Button>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                       

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Dishwashing Liquid</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Laundry Detergent</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Floor Cleaner</Button>
                                             </Link>

                                        </li>
                                        
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Toilet Cleaner</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Garbage Bags</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Room Freshner</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Personal Care</Button>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                       

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Shampoo</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Toothpaste</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Soap</Button>
                                             </Link>

                                        </li>
                                        
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Razor</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Senitary Pads</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Face Wash</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                        </li>
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition text-black !font-[500] !text-[rgba(0,0,0,0.9)]
                            hover:!text-[#ff5252] !py-4">Beauty</Button></Link>
                     <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white
                            shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full relative">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Skincare</Button>

                                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Cleansers </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Toners </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Moisturizers </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Serums </Button>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Face Masks</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>

                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Makeup</Button>
                           <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Foundations </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Primers </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Highlighters </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Eyeshadows </Button>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Lipsticks </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Eyeliners</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Lip Balms</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Mascaras </Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Haircare</Button>
                             <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                     

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Shampoos </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Conditioners </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Hair Masks</Button>
                                             </Link>

                                        </li>
                                        

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Styling Products </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Hair Oils</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Dry Shampoos</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Body Care</Button>
                                <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Body Washes</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Body Lotions</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Body Oils </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Deodorants </Button>
                                             </Link>

                                        </li>
                                        

                                    </ul>
                            </div>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Tools and Accessories</Button>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                       

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Makeup Brushes</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Sponges and Blenders</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Skincare Tools</Button>
                                             </Link>

                                        </li>
                                        
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Hair Tools</Button>
                                             </Link>
                                        </li>

                                       

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Fragrances</Button>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                       

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Perfumes</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Body Mists</Button>
                                             </Link>
                                        </li>

                                       
                                        
                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Men's Grooming   </Button>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                       

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Shaving Creams </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Beard Oils</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Aftershaves</Button>
                                             </Link>

                                        </li>
                                        
                                        
                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Natural and Organic Products</Button>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                       

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Organic Skincare </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Vegan Makeup </Button>
                                             </Link>
                                        </li>

                                      
                                      


                                        

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                        </li>
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition text-black !font-[500] !text-[rgba(0,0,0,0.9)]
                            hover:!text-[#ff5252] !py-4">Wellness</Button></Link>

                    <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white
                            shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full relative">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Supplements and Nutrition</Button>

                                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Vitamins and Minerals </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Herbal Supplements </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Protein Powders </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Probiotics  </Button>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Omega-3 Supplements </Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>

                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Fitness and Exercise</Button>
                           <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Yoga Mats </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Resistance Bands  </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Dumbbells and Kettlebells </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Foam Rollers </Button>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Fitness Trackers </Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Relaxation and Stress Relief</Button>
                             <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                     

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Essential Oils  </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Diffusers  </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Candles </Button>
                                             </Link>

                                        </li>
                                        

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Weighted Blankets </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Meditation Cushions</Button>
                                             </Link>
                                        </li>
                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Sleep Aids</Button>
                                <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Sleep Masks</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Herbal Teas</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">White Noise Machines</Button>
                                             </Link>
                                        </li>


                                    </ul>
                            </div>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Personal Care</Button>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                       

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Natural Deodorants</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Bath Salts and Soaks</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Skincare </Button>
                                             </Link>

                                        </li>
                                       
                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Mental Wellness</Button>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                       

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Journals</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Books </Button>
                                             </Link>
                                        </li>

                                       
                                        
                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Healthy Living</Button>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                       

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Water Bottles </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Meal Prep Containers</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Blenders and Juicers</Button>
                                             </Link>

                                        </li>
                                        
                                        
                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Eco-Friendly Products</Button>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                       

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Reusable Bags </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Bamboo Toothbrushes</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                            

                        </li>
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition text-black !font-[500] !text-[rgba(0,0,0,0.9)]
                            hover:!text-[#ff5252] !py-4">Jewellery</Button></Link>

                    <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white
                            shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full relative">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Necklaces</Button>

                                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Pendants </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Chokers </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Statement Necklaces </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Layered Necklaces   </Button>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Lockets  </Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>

                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Earrings</Button>
                           <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Studs</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Hoops </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Drop Earrings </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Chandelier Earrings</Button>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Ear Cuffs </Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Bracelets</Button>
                             <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                     

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Bangles  </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Cuffs   </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Charm Bracelets</Button>
                                             </Link>

                                        </li>
                                        

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Tennis Bracelets </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Beaded Bracelets</Button>
                                             </Link>
                                        </li>
                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Rings</Button>
                                <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none ">Stackable Rings </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Solitaire Rings</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Cocktail Rings</Button>
                                             </Link>
                                        </li>


                                    </ul>
                            </div>
                                             </Link>

                                        </li>
                                        
                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Watches</Button>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                       

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Analog Watches</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Digital Watches</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Smartwatches</Button>
                                             </Link>

                                        </li>
                                       
                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Brooches and Pins</Button>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                       

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Floral Brooches</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Animal Brooches</Button>
                                             </Link>
                                        </li>

                                       
                                        
                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Anklets</Button>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                       

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Chain Anklets</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Beaded Anklets</Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">

                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Charm Anklets</Button>
                                             </Link>

                                        </li>
                                        
                                        
                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Materials and Styles</Button>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                                              shadow-md opacity-0 transition-all">
                                    <ul>
                                       

                                        <li className="list-none w-full">
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Gold Jewelry </Button>
                                             </Link>
                                        </li>

                                        <li className="list-none w-full">      
                                        <Link to="/" className="w-full">

                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left
                                             !justify-start !rounded-none">Silver Jewelry</Button>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>
                                             </Link>
                                        </li>

                                    </ul>
                            </div>          

                        </li>
                    </ul>
                </div>
                    <div className="col_3 w-[20%]">
                        <p className="text-[16px] font-[500] flex items-center gap-3 mb-0 mt-0">
                            <GoRocket className="text-[18px]"/>
                        International Delivery</p>
                    </div>
                
            </div>
        </nav>
        {/*Category Panel components */}
        <CategoryPanel  isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel}/>
       
       </>
    );
};

export default Navigation;