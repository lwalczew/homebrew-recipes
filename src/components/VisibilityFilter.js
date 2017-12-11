import React from 'react';
import {Form, Header, Segment} from 'semantic-ui-react';

const VisibilityFilter = (props) => {
  
  const handleChange = (e, {name, value}) => {
    props.setVisibilityFilter({name, value})
  }
  
  return (
    <Form inverted size='tiny' >
      <Header inverted content='Filter recipes by...' />
      <Form.Input label='Recipe Name' name='name' value={props.visibilityFilter.name} onChange={handleChange} />
      <Form.Input label='Style' name='style' value={props.visibilityFilter.style} onChange={handleChange} />
      <Form.Input label='Malt' name='malt' value={props.visibilityFilter.malt} onChange={handleChange} />
      <Form.Input label='Hops' name='hops' value={props.visibilityFilter.hops} onChange={handleChange} />
      <Form.Input label='Yeast' name='yeast' value={props.visibilityFilter.yeast} onChange={handleChange} />
      <Form.Input label='Other Ingredients' name='otherIngredients' value={props.visibilityFilter.otherIngredients} onChange={handleChange} />
    </Form>
  )
}

export default VisibilityFilter;