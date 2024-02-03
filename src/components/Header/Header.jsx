import React from "react";
import logo from "../../../public/logo/logo.svg";
import backet from "../../../public/icons/backet.svg";
import like from "../../../public/icons/like.svg";
import user from "../../../public/icons/user.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const OpenModal = () => {
    let modal = document.querySelector(".modal");
    let modal_block = document.querySelector(".modal_block");

    modal.style.display = "block";

    setTimeout(() => {
      modal.style.background = "#0000007c";
      modal_block.style.right = "0%";
    }, 300);
  };
  return (
    <>
      <header className="header">
        <div className="header_items">
          <NavLink to="/">
            <div className="logo">
              <img src={logo} alt="" />
              <div className="logo_name">
                <p>REACT SNEAKERS</p>
                <span>Магазин лучших кроссовок</span>
              </div>
            </div>
          </NavLink>
          <div className="icons">
            <div onClick={OpenModal} className="backet">
              <img src={backet} alt="" id="modal" />
              <p>1205 руб.</p>
            </div>
            <NavLink to="/favorite">
              <img src={like} alt="" />
            </NavLink>
            <NavLink to="/profile">
              <img src={user} alt="" />
            </NavLink>
          </div>
        </div>
      </header>
      <div className="line"></div>
    </>
  );
}
