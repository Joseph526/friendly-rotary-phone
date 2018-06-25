import React from "react";

const Card = props => (
    <div className="card mb-4 box-shadow">
        <img className="card-img-top" src="#" alt="Placeholder" />
        <div className="card-body">
            <h5 className="card-title">NewsCatcher</h5>
            <p className="card-text">News aggregator app using Node, Express and Mongoose</p>
            <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">JavaScript</small>
            </div>
        </div>
    </div>
);

export default Card;
