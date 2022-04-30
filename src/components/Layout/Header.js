import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Cafe Application</h1>
        <HeaderCartButton />
      </header>
      <div>
        <img className={classes["main-image"]} src={mealsImage} alt="meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
