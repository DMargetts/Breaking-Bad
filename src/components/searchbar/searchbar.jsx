import React from "react";
import searchbarStyle from "./searchbarStyle.module.scss";

const searchbar = ({ search }) => {
  return (
    <div className={searchbarStyle.searchbar}>
      <input
        type="text"
        placeholder="Search Character Name"
        onChange={search}
      />
    </div>
  );
};

export default searchbar;
