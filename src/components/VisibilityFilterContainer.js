import {connect} from 'react-redux';
import VisibilityFilter from './VisibilityFilter';
import {setVisibilityFilter} from '../actions';

const mapStateToProps = state => ({
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
  setVisibilityFilter: visibilityFilter => {
    dispatch(setVisibilityFilter(visibilityFilter))
  }
});

const VisibilityFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilter);

export default VisibilityFilterContainer;