import React from "react";
import headerStyle from "./headerStyle.module.scss";
import headerImage from "../../img/logo.png";

const header = () => {
  return (
    <div className={headerStyle.header}>
      <img src={headerImage} />
    </div>
  );
};

export default header;
