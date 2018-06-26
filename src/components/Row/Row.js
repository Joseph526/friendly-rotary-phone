import React from "react";
import Card from "../Card";

const Row = props => (
    <div className="row">
        {/* <div className="col-md"> */}
            {props.baseballCards.map(baseballCard => (
                <div className="col-md">
                    <Card
                        id={baseballCard.id}
                        key={baseballCard.id}
                        href={baseballCard.href}
                        onClick={props.handleCardClick}
                    />
                </div>
            ))}
        {/* </div> */}
    </div>
);

export default Row;
