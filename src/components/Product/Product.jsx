import React from "react";
import "./Product.css"


export default function Product({name, price, photo}) {
  return (
    <>
      <div className="products_item">
        <div className="like">  
        </div>
        <img src={photo} alt="" />
        <p>{name}</p>
        <div className="price">
          <div className="price_txt">
            <span>Цена: </span>
            <p>{price}</p>
          </div>
          <div className="plus">
          </div>
        </div>
      </div>
    </>
  );
}
