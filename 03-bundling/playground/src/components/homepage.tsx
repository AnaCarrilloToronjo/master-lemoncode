import React from "react";
import style from "./styles.scss";
import logoImg from "../content/logo.png";

export const Homepage = () => {
  return (
    <div className={style.homepage}>
      <img src={logoImg} alt="Logo" />
      <div>
        <h1>Hello World</h1>
        <span>{`Mode ${process.env.NODE_ENV}`}</span>
      </div>
    </div>
  );
};
