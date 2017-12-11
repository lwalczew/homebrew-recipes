import React from 'react';
import ShowRecipeModal from './ShowRecipeModal';
import VisibilityFilterContainer from './VisibilityFilterContainer';
import {Segment} from 'semantic-ui-react';

const ActionsSidebar = () => (
  <Segment inverted color='grey'>
    <ShowRecipeModal newOrEdit='new' modalName='Add New Recipe' isFluid={true} />
    <VisibilityFilterContainer />
  </Segment>
)

export default ActionsSidebar;