import React from "react";
import search from "../../../public/search/search.svg"
import "./Title.css";

export default function Title() {
  return (
    <>
      <div className="title_items">
        <div className="title">
          <p>Все кроссовки</p>
        </div>
        <div className="search">
            <img src={search} alt="" />
            <p>Поиск...</p>
        </div>
      </div>
    </>
  );
}
