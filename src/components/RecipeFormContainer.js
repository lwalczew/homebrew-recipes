import {connect} from 'react-redux';
import RecipeForm from './RecipeForm';
import {addRecipe} from '../actions';

const mapStateToProps = (state, ownProps) => ({
  recipes: state.recipes,
  newOrEdit: ownProps.newOrEdit,
  handleModalClose: ownProps.handleModalClose
});

const mapDispatchToProps = dispatch => ({
  addRecipe: recipe => {
    dispatch(addRecipe(recipe))
  }
});

const RecipeFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps 
)(RecipeForm);

export default RecipeFormContainer