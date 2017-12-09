import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import './App.css';
import RecipeListContainer from './components/RecipeListContainer';
import ShowRecipeModal from './components/ShowRecipeModal';



class App extends Component {
  render() {
    return (
      <Container>
        <RecipeListContainer />
        <ShowRecipeModal newOrEdit='new' modalName='Add New Recipe' />
      </Container>
    );
  }
}

export default App;
