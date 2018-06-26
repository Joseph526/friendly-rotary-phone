import React from "react";
import Card from "../Card";

const Row = props => (
    <div className="row">
        <div className="col-md-4">
            <Card onClick={props.handleCardClick} />
        </div>
        <div className="col-md-4">
            <Card onClick={props.handleCardClick} />
        </div>
        <div className="col-md-4">
            <Card onClick={props.handleCardClick} />
        </div>
    </div>
);

export default Row;
