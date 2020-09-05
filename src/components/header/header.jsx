import React from "react";
import headerStyle from "./headerStyle.module.scss";

const header = () => {
  return (
    <div className={headerStyle.header}>
      <h1>Breaking Bad</h1>
    </div>
  );
};

export default header;
