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
        // Check if currentScore equals length of baseballCards array => win condition
        if (newState.currentScore === newState.baseballCards.length) {
            newState.message = "Congrats, you won!";
            this.resetGame(newState);
        }
        this.setState(newState);
    };

    handleIncorrectGuess = newState => {
        newState.message = "Sorry, you lost!";
        this.resetGame(newState);
    };

    handleCardClick = event => {
        // Get the id of the clicked card
        const cardId = parseInt(event.target.attributes.getNamedItem("id").value);
        console.log(cardId);
        // Set a flag for a correct guess
        let guessedCorrectly = false;
        // Clone this.state to the newState object
        const newState = { ...this.state };
        // Check if card has been clicked twice
        const newData = newState.baseballCards.map(item => {
            if (item.id === cardId) {
                console.log(item.id);
                if (!item.cardClicked) {
                    // Set cardClicked to true
                    item.cardClicked = true;
                    // Set guessedCorrectly to true
                    guessedCorrectly = true;
                }
            }
            console.log(item);
            return item;
        });
        guessedCorrectly
            ? this.handleCorrectGuess(newData)
            : this.handleIncorrectGuess(newData);
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
