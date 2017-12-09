import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import './App.css';
import RecipeListContainer from './components/RecipeListContainer';
import NewRecipeModal from './components/NewRecipeModal';



class App extends Component {
  render() {
    return (
      <Container>
        <RecipeListContainer />
        <NewRecipeModal />
      </Container>
    );
  }
}

export default App;
