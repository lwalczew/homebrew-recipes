import {connect} from 'react-redux';
import RecipeList from './RecipeList';
import {deleteRecipe} from '../actions';

const mapStateToProps = (state) => ({
  recipes: state.recipes
})

const mapDispatchToProps = (dispatch) => ({
  onDeleteClick: id => {
    dispatch(deleteRecipe(id))
  }
})

const RecipeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);

export default RecipeListContainer;