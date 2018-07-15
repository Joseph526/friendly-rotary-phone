import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import baseballCards from "./baseballCards.json";

class App extends Component {
    state = {
        baseballCards,
        currentScore: 0,
        topScore: 0,
        cardClicked: [false, false, false, false, false, false, false, false, false]
    };

    shuffle = arr => {
        let i;
        let j;
        let temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    };

    handleCardClick = event => {
        // Get the id of the clicked card
        const cardId = event.target.attributes.getNamedItem("id").value;
        // Clone this.state to the newState object
        const newState = { ...this.state };
        // Check if card has been clicked twice
        if (this.state.cardClicked[cardId]) {
            // Update newState as reset, then replace this.state with newState
            newState.currentScore = 0;
            newState.cardClicked = [false, false, false, false, false, false, false, false, false];
            newState.baseballCards = this.shuffle(baseballCards);
            this.setState(newState);
        }
        else {
            // Update newState, then replace this.state with newState
            newState.currentScore += 1;
            newState.topScore = (newState.currentScore >= newState.topScore) ? newState.currentScore : newState.topScore;
            newState.cardClicked[cardId] = true;
            newState.baseballCards = this.shuffle(baseballCards);
            this.setState(newState);
        }
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
                    baseballCards={this.state.baseballCards}
                    handleCardClick={this.handleCardClick}
                />
            </div>
        );
    }
}

export default App;