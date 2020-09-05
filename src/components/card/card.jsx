import React from "react";
import cardStyle from "./cardStyle.module.scss";

const card = ({ name, nickname, birthday, status, img }) => {
  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.innerCard}>
        <div className={cardStyle.cardFront}>
          <img className={cardStyle.img} src={img} alt="character" />
        </div>
        <div className={cardStyle.cardBack}>
          <h2>{name}</h2>
          <ul>
            <li>
              <strong>Nickname: </strong>
              {nickname}
            </li>
            <li>
              <strong>Birthday: </strong>
              {birthday}
            </li>
            <li>
              <strong>Status: </strong>
              {status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default card;
