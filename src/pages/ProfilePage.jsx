import React from "react";
import { NavLink } from "react-router-dom";
import { basket } from "../data";
import Product from "../components/Product/Product";
import str from "../../public/profile/str.svg";

const Profile = () => {
  return (
    <>
      <div className="titleProf" style={{ display: "flex", alignItem: "center", gap: "20px", marginTop: "44px" }}>
        <NavLink to="/">
          <img src={str} alt="" />
        </NavLink>
        <h1>Мои покупки</h1>
      </div>
      <div className="container_prod">
        {basket.map((basket, i) => (
          <Product key={i} {...basket} />
        ))}
      </div>
    </>
  );
};
export default Profile;
