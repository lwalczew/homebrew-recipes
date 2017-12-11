import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import './App.css';
import RecipeListContainer from './components/RecipeListContainer';
import ShowRecipeModal from './components/ShowRecipeModal';
import VisibilityFilterContainer from './components/VisibilityFilterContainer'



class App extends Component {
  render() {
    return (
      <Container>
        <RecipeListContainer />
        <ShowRecipeModal newOrEdit='new' modalName='Add New Recipe' />
        <VisibilityFilterContainer />
      </Container>
    );
  }
}

export default App;
