import React from "react";
import Link from "next/link";

const ServiceCardFive = ({ data }) => {
  const { title, text, iconName,price, url } = data;
  return (
    <div className="icon_box_2 text-center">
     
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="iconWrap">
        <i className={iconName}></i>
      </div>
      <h3>{price}</h3>
      <Link href={url}>
        <a>discover more</a>
      </Link>
      <button>buchen</button>
    </div>
  );
};

export default ServiceCardFive;
