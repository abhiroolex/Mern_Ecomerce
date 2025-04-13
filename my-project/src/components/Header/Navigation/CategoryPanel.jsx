import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { IoCloseSharp } from "react-icons/io5";



import CategoryCollapse from '../../CategoryCollapse';

const categories = [
  {
    title: "Fashion",
    subcategories: [
      {
        title: "Apparel",
        items: ["Smart Tablet", "Crepe T-Shirt", "Leather Watch", "Headphones"]
      },
      {
        title: "Outerwear",
        items: ["T-Shirts", "Pants", "Ladies Wear", "Purse"]
      },
      {
        title: "Footwear",
        items: ["Sneakers", "Sport", "Formal", "Caliber", "Jordan", "Adidas", "Nike", "Goldstar", "Converse"]
      }
    ]
  },
  {
    title: "Jewellery",
    items: ["Necklace", "Bracelet", "Earrings"]
  },
  {
    title: "Watches",
    items: ["Analog", "Digital", "Smart Watches"]
  },
  {
    title: "Cosmetics",
    items: ["Lipstick", "Foundation", "Eyeliner"]
  },
  {
    title: "Accessories",
    items: ["Belts", "Hats", "Scarves"]
  },
  {
    title: "Electronic",
    items: ["Smartphones", "Laptops", "Headphones"]
  },
  {
    title: "Furniture",
    items: ["Sofa", "Table", "Chair"]
  },
  {
    title: "Sunglasses",
    items: ["Ray-Ban", "Oakley", "Aviator"]
  },
  {
    title: "Rolling Diamond",
    items: ["Diamond Ring", "Diamond Necklace"]
  },
  {
    title: "Xbox Controller",
    items: ["Wired", "Wireless", "Elite Series"]
  },
  {
    title: "Leather Watch",
    items: ["Brown Strap", "Black Strap", "Classic"]
  },
  {
    title: "Smart Tablet",
    items: ["Samsung", "Apple", "Lenovo"]
  },
  {
    title: "Purse",
    items: ["Clutch", "Sling", "Handbag"]
  },
];

const CategoryPanel = ({ isOpenCatPanel, setIsOpenCatPanel }) => {


  const toggleDrawer = (open) => () => setIsOpenCatPanel(open);

  
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        Shop By Categories
        <IoCloseSharp onClick={toggleDrawer(false)} className="cursor-pointer text-[20px]" />
      </h3>
  
      <CategoryCollapse categories={categories} />
    </Box>
  );

  return (
    <Drawer open={isOpenCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
