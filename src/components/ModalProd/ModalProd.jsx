import React from "react";
import "./ModalProd.css";
import close from "../../../public/product/close.svg";

export default function ModalProd({ name, price, photo }) {
  return (
    <>
      <div className="basket_item">
        <img src={photo} alt="" />
        <div className="priceM">
          <p>{name}</p>
          <span>{price}</span>
        </div>
        <div className="close">
          <img src={close} alt="" />
        </div>
      </div>
    </>
  );
}
