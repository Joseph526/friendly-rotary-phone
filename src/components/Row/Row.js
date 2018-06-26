import React from "react";
import Card from "../Card";

const Row = props => (
    <div className="row">
        {props.baseballCards.map(baseballCard => (
            <Card
                id={baseballCard.id}
                key={baseballCard.id}
                href={baseballCard.href}
                onClick={props.handleCardClick}
            />
        ))}
    </div>
);

export default Row;
