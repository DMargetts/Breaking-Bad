import React from "react";
import cardStyle from "./cardStyle.module.scss";

const card = ({ name, nickname, birthday, status, img }) => {
  return (
    <div className={cardStyle.card}>
      <img className={cardStyle.img} src={img} />
      <ul>
        <li>
          <strong>Name: </strong>
          {name}
        </li>
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
  );
};

export default card;
