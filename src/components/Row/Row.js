import React from "react";
import Card from "../Card";

const Row = props => (
    <div className="row">
        <div className="col-md-4">
            <Card />
        </div>
        <div className="col-md-4">
            <Card />
        </div>
        <div className="col-md-4">
            <Card />
        </div>
    </div>
);

export default Row;
