import React from "react";
import style from "./styles.scss";
import logoImg from "../content/logo.png";

export const Homepage = () => {
  return (
    <div className={style.homepage}>
      <img src={logoImg} alt="Logo" />
      <h1>Hello World</h1>
    </div>
  );
};
