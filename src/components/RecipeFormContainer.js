import {connect} from 'react-redux';
import RecipeForm from './RecipeForm';
import {addRecipe, editRecipe} from '../actions';

const mapStateToProps = (state, ownProps) => ({
  recipes: state.recipes,
  newOrEdit: ownProps.newOrEdit,
  handleModalClose: ownProps.handleModalClose
});

const mapDispatchToProps = dispatch => ({
  addRecipe: recipe => {
    dispatch(addRecipe(recipe))
  },
  editRecipe: recipe => {
    dispatch(editRecipe(recipe))
  }
});

const RecipeFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps 
)(RecipeForm);

export default RecipeFormContainer