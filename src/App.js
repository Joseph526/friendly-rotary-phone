import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";

class App extends Component {
    state = {
        currentScore: 0,
        topScore: 0
    };

    handleCardClick = event => {
        console.log("Card clicked!");
        const newState = { ...this.state };
        newState.currentScore += 1;
        newState.topScore += 1;
        this.setState(newState);
    };
    
    render() {
        return (
            <div className="App">
                <Navbar
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                />
                <Jumbotron />
                <Container
                    handleCardClick={this.handleCardClick}
                />
            </div>
        );
    }
}

export default App;
