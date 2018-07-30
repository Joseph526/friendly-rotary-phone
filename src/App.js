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
        cardsDidShuffle: false,
        message: ""
    };

    componentDidUpdate() {
        if (!this.state.cardsDidShuffle) {
            const newState = { ...this.state };
            newState.baseballCards = this.shuffle(newState.baseballCards);
            newState.cardsDidShuffle = true;
            this.setState(newState);
        }
    };

    resetGame = newState => {
        newState.baseballCards = baseballCards;
        newState.currentScore = 0;
        newState.cardsDidShuffle = false;
        this.setState(newState);
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

    handleCorrectGuess = newState => {
        // Increment currentScore (and topScore if necessary)
        newState.currentScore += 1;
        newState.topScore = (newState.currentScore >= newState.topScore) ? newState.currentScore : newState.topScore;
        newState.cardsDidShuffle = false;
        this.setState(newState);
    };

    handleIncorrectGuess = newState => {
        newState.message = "Sorry, you lost!";
        this.resetGame(newState);
    };

    handleCardClick = event => {
        // Get the id of the clicked card
        const cardId = event.target.attributes.getNamedItem("id").value;
        console.log(cardId);
        // Clone this.state to the newState object
        const newState = { ...this.state };
        // Check if card has been clicked twice
        for (let i = 0; i < newState.baseballCards.length; i++) {
            if (newState.baseballCards[i].id === cardId) {
                if (newState.baseballCards[i].cardClicked) {
                    this.handleIncorrectGuess(newState);
                }
                else if (!newState.baseballCards[i].cardClicked) {
                    // Set cardClicked to true
                    newState.baseballCards[i].cardClicked = true;
                    this.handleCorrectGuess(newState);
                }
            }
            else {
                console.log("Nothing happened");
            }
        }
        console.log(newState.baseballCards);
        // Check if currentScore equals length of baseballCards array => win condition
        if (newState.currentScore === newState.baseballCards.length) {
            newState.message = "Congrats, you won!";
            this.resetGame(newState);
        }
    };
    
    render() {
        return (
            <div className="App">
                <Navbar
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                    message={this.state.message}
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
