import {combineReducers} from 'redux';
import recipes from './recipes';
import visibilityFilter from './visibilityFilter';

const homeBrew = combineReducers({
  recipes,
  visibilityFilter
})

export default homeBrew;