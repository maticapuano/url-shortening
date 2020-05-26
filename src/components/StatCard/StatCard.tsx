import React from "react";
import "./StatCard.scss";

const StatCard = (props: { src: string; title: string; body: string }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.src} alt={props.title} />
      </div>
      <div className="card-title"> {props.title}</div>
      <div className="card-body">{props.body}</div>
    </div>
  );
};

export default StatCard;
