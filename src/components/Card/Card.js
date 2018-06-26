import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card mb-4 box-shadow">
        <img className="img-thumbnail" id={props.id} src={props.href} alt="Baseball Card" onClick={props.onClick} />
    </div>
);

export default Card;
