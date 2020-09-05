import React from "react";
import Card from "../card/card";
import cardAreaStyle from "./cardAreaStyle.module.scss";

const cardArea = ({ data }) => {
  return (
    <div className={cardAreaStyle.cardArea}>
      {data.map((character, i) => {
        const { name, birthday, status, nickname, img } = character;
        return (
          <Card
            key={i}
            name={name}
            birthday={birthday}
            status={status}
            nickname={nickname}
            img={img}
          />
        );
      })}
    </div>
  );
};

export default cardArea;
