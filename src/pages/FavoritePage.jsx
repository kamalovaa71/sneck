import React from "react";
import { NavLink } from "react-router-dom";
import { basket } from "../data";
import FavProd from "../components/FavProd/FavProd";
import str from "../../public/profile/str.svg";

const Favorite = () => {
  return (
    <>
      <div
        className="titleProf"
        style={{
          display: "flex",
          alignItem: "center",
          gap: "20px",
          marginTop: "44px",
        }}
      >
        <NavLink to="/">
          <img src={str} alt="" />
        </NavLink>
        <h1>Мои закладки</h1>
      </div>
      <div className="container_prod">
        {basket.map((basket, i) => (
          <FavProd key={i} {...basket} />
        ))}
      </div>
    </>
  );
};
export default Favorite;