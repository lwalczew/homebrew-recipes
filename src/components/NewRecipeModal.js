import React, {Component} from 'react';
import {Button, Header, Modal} from 'semantic-ui-react';
import RecipeFormContainer from './RecipeFormContainer';

class NewRecipeModal extends Component {
  state = { modalOpen: false }
  
  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>Add New Recipe</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Header icon='beer' content='Add New Recipe' />
        <Modal.Content>
          <RecipeFormContainer newOrEdit='new' handleModalClose={this.handleClose}/>
        </Modal.Content>
      </Modal>
    )
  }
}

export default NewRecipeModal;