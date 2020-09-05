import React, { useEffect, useState } from "react";
import Header from "./components/header/header";
import Searchbar from "./components/searchbar/searchbar";
import CardArea from "./components/cardArea/cardArea";

import appStyle from "./appStyle.module.scss";
import "./style.css";

const App = () => {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((resp) => resp.json())
      .then((data) => {
        data.splice(1, 1);
        data.splice(3, 1);
        setData(data);
        setImages(data);
      });
  }, []);

  const searchCharacter = (e) => {
    if (e !== undefined) {
      const filter = data.filter((character) => {
        return character.name.toLowerCase().includes(e.target.value);
      });
      setImages(filter);
    } else {
      setImages(data);
    }
  };
  return (
    <div className={appStyle.app}>
      <Header />
      <Searchbar search={searchCharacter} />
      <CardArea data={images} />
    </div>
  );
};

export default App;
