import {combineReducers} from 'redux';
import recipes from './recipes';

const homeBrew = combineReducers({
  recipes
})

export default homeBrew;