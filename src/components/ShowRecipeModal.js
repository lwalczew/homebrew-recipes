import React, {Component} from 'react';
import {Button, Header, Modal, Segment} from 'semantic-ui-react';
import RecipeFormContainer from './RecipeFormContainer';

class ShowRecipeModal extends Component {
  state = { modalOpen: false }
  
  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={<Button style={{margin: '1em 0'}}onClick={this.handleOpen} color='blue' fluid={this.props.isFluid}>{this.props.modalName}</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Header icon='beer' content={this.props.modalName} />
        <Modal.Content>
          <RecipeFormContainer newOrEdit={this.props.newOrEdit} handleModalClose={this.handleClose} recipeToEdit={this.props.recipeToEdit} />
        </Modal.Content>
      </Modal>
    )
  }
}

export default ShowRecipeModal;