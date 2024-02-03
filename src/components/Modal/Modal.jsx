import React from "react";
import "./Modal.css";
import ModalProd from "../ModalProd/ModalProd";
import { basket } from "../../data";

export default function Modal() {
  const CloseModal = () => {
    let modal = document.querySelector(".modal");
    let modal_block = document.querySelector(".modal_block");

    modal.style.background = "#00000000";
    modal_block.style.right = "-100%";
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  };
  return (
    <>
      <div onClick={CloseModal} className="modal">
        <div className="modal_block">
          <h1>Корзина</h1>
          {basket.map((product, index) => (
            <ModalProd key={index} {...product} />
          ))}
          <div className="modal_action_block">
            <div className="modal_stroke">
              <p>Итого:</p>
              <div className="dashed"></div>
              <span>21 498 руб. </span>
            </div>
            <div className="modal_stroke">
              <p>Налог 5%:</p>
              <div className="dashed"></div>
              <span>1074 руб. </span>
            </div>

            <button className="basket_btn">Оформить заказ</button>
          </div>
        </div>
      </div>
    </>
  );
}
