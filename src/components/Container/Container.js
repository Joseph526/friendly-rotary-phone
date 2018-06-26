import React from "react";
import Row from "../Row";

const Container = props => (
    <main className="container-fluid">
        <div className="album py-5">
            <div className="container">
                <Row handleCardClick={props.handleCardClick} />
                <Row handleCardClick={props.handleCardClick} />
                <Row handleCardClick={props.handleCardClick} />
            </div>
        </div>
    </main>
);

export default Container;
