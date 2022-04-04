import React from "react";

import classes from "./Cards.module.css";

const Cards = (props) => {
  return (
    <div className={classes.card}>
      <img
        src={`https://source.unsplash.com/400x200/?${props.name}`}
        alt={props.name}
      />
      <button className={classes.remove} onClick={props.remove}>
        x
      </button>
      <h2>{props.name}</h2>
      <div className={classes.likesContainer}>
        <p className={classes.likes} style={{ color: props.color }}>
          &#x2665;{props.like}
        </p>
        <button onClick={props.add} className={classes.like}>
          Add like
        </button>
      </div>
    </div>
  );
};

export default Cards;
