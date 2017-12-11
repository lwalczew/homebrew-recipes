import React, { Component } from 'react';
import {Container, Grid} from 'semantic-ui-react';
import './App.css';
import RecipeListContainer from './components/RecipeListContainer';
import ActionsSidebar from './components/ActionsSidebar';


class App extends Component {
  render() {
    return (
      <Container style={{marginTop: '1em'}}>
        <Grid>
          <Grid.Column width={6}>
            <ActionsSidebar />
          </Grid.Column>
          <Grid.Column width={10}>
            <RecipeListContainer />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;
