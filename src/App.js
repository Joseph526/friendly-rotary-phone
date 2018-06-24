import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Jumbotron />
                <Container />
            </div>
        );
    }
}

export default App;
