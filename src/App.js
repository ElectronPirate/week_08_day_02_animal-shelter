import React, { Component } from 'react';
import AnimalsListContainer from './containers/AnimalsListContainer';
import NewAnimalContainer from './containers/NewAnimalContainer';
import AnimalsTotalContainer from './containers/AnimalsTotalContainer';

class App extends Component {
  render() {
    return (
      <>
        <NewAnimalContainer />
        <h2>Animals</h2>
        <AnimalsListContainer />
        <AnimalsTotalContainer />
      </>
    );
  }
}

export default App;
