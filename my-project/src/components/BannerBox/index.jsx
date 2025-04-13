import React from "react";
import { Link } from "react-router-dom";

const BannerBox = (props) => {
  return (
    <div className="w-full h-[150px] overflow-hidden rounded-lg group">
      <Link to="/">
        <img
          src={props.img}
          className="w-full h-full transition-all group-hover:scale-105 group-hover:rotate-3 object-cover"
          alt="banner"/>
      </Link>
    </div>
  );
};

export default BannerBox;
