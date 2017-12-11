import React, {Component} from 'react';
import {Form, Header, Popup} from 'semantic-ui-react';
import {styleNames, maltNames, hopNames} from '../constants';
import Guid from 'guid';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.newOrEdit === 'new' ? {
      maltGroups: 1,
      hopsGroups: 1,
      otherIngredientsGroups: 1,
      name: '',
      style: '',
      malt: [{name: '', amount: ''}],
      hops: [{name: '', amount: '', time: ''}],
      yeast: '',
      otherIngredients: [{name: '', amount: '', time: ''}],
      directions: ''
    } : {
      maltGroups: this.props.recipeToEdit.malt.length,
      hopsGroups: this.props.recipeToEdit.hops.length,
      otherIngredientsGroups: this.props.recipeToEdit.otherIngredients.length,
      name: this.props.recipeToEdit.name,
      style: this.props.recipeToEdit.style,
      malt: this.props.recipeToEdit.malt,
      hops: this.props.recipeToEdit.hops,
      yeast: this.props.recipeToEdit.yeast,
      otherIngredients: this.props.recipeToEdit.otherIngredients,
      directions: this.props.recipeToEdit.directions,
    }
    this.baseState = this.state;
  }

  newRow = (e, {category}) => this.setState(prevState => ({[category]: prevState[category] + 1}))

  deleteRow = (e, {category}) => this.setState(prevState => ({[category]: prevState[category] - 1}))

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleArrayChange = (e, {category, name, value, i}) => {
    let ingredientArray = [...this.state[category]];
    if (ingredientArray.length - 1 < i) ingredientArray.push(category === 'maltGroups' ? {name: '', amount: ''} : {name: '', amount: '', time: ''});
    ingredientArray[i][name] = value;
    this.setState({ [category]: ingredientArray });
  }

  handleSubmit = () => {
    const thisRecipe = {
      id: this.props.newOrEdit==='new' ? Guid.create().value : this.props.recipeToEdit.id,
      name: this.state.name,
      style: this.state.style,
      malt: this.state.malt.slice(0, this.state.maltGroups),
      hops: this.state.hops.slice(0, this.state.hopsGroups),
      yeast: this.state.yeast,
      otherIngredients: this.state.otherIngredients.slice(0, this.state.otherIngredientsGroups),
      directions: this.state.directions
    }
    this.props.newOrEdit==='new' ? this.props.addRecipe(thisRecipe) : this.props.editRecipe(thisRecipe);
    this.props.handleModalClose();
  }

  render() {
    let maltGroups = new Array(this.state.maltGroups).fill(1).map((x,i) => (
      <Form.Group key={`malt${i}`}>
        <Form.Dropdown 
          width={6} 
          category='malt'
          name='name' 
          value={this.state.malt[i] ? this.state.malt[i].name : ''}
          i={i} 
          placeholder='Select malt' 
          options={maltNames} 
          onChange={this.handleArrayChange} 
          fluid 
          search 
          selection />
        <Form.Input 
          category='malt' 
          name='amount' 
          value={this.state.malt[i] ? this.state.malt[i].amount : ''} 
          i={i}
          onChange={this.handleArrayChange} 
          placeholder='Amount (1 can, 1.5 lb., etc.)' />
        {this.state.maltGroups === i+1 ? <Popup trigger={<Form.Button size='small' circular icon='add' category='maltGroups' onClick={this.newRow}/>} content='Add another malt' /> : null}
        {this.state.maltGroups === i+1 && this.state.maltGroups > 1 ? <Popup trigger={<Form.Button size='small' circular color='red' icon='minus' category='maltGroups' onClick={this.deleteRow}/>} content='Delete row' /> : null}
      </Form.Group>
    ))

    let hopsGroups = new Array(this.state.hopsGroups).fill(1).map((x,i) => (
      <Form.Group key={`hops${i}`}>
        <Form.Dropdown 
          width={6} 
          category='hops' 
          name='name' 
          value={this.state.hops[i] ? this.state.hops[i].name : ''} 
          i={i} 
          placeholder='Select hop' 
          options={hopNames} 
          onChange={this.handleArrayChange} 
          fluid 
          search 
          selection />
        <Form.Input 
          category='hops' 
          name='amount' 
          value={this.state.hops[i] ? this.state.hops[i].amount : ''} 
          i={i} 
          placeholder='Amount (1 oz., etc.)' 
          onChange={this.handleArrayChange} />
        <Form.Input 
          category='hops' 
          name='time' 
          value={this.state.hops[i] ? this.state.hops[i].time : ''} 
          i={i} 
          placeholder='Time to add' 
          onChange={this.handleArrayChange} />
        {this.state.hopsGroups === i+1 ? <Popup trigger={<Form.Button size='small' circular icon='add' category='hopsGroups' onClick={this.newRow}/>} content='Add another hop' /> : null}
        {this.state.hopsGroups === i+1 && this.state.hopsGroups > 1 ? <Popup trigger={<Form.Button size='small' circular color='red' icon='minus' category='hopsGroups' onClick={this.deleteRow}/>} content='Delete row' /> : null}
      </Form.Group>
    ))

    let otherIngredientsGroups = new Array(this.state.otherIngredientsGroups).fill(1).map((x,i) => (
      <Form.Group key={`otherIngredients${i}`}>
        <Form.Input 
          category='otherIngredients' 
          name='name' 
          value={this.state.otherIngredients[i] ? this.state.otherIngredients[i].name : ''} 
          i={i} 
          placeholder='Other ingredient' 
          onChange={this.handleArrayChange} />
        <Form.Input 
          category='otherIngredients' 
          name='amount' 
          value={this.state.otherIngredients[i] ? this.state.otherIngredients[i].amount : ''} 
          i={i} 
          placeholder='Amount' 
          onChange={this.handleArrayChange} />
        <Form.Input 
          category='otherIngredients' 
          name='time' 
          value={this.state.otherIngredients[i] ? this.state.otherIngredients[i].time : ''} 
          i={i} 
          placeholder='Time to add' 
          onChange={this.handleArrayChange} />
        {this.state.otherIngredientsGroups === i+1 ? <Popup trigger={<Form.Button size='small' circular icon='add' category='otherIngredientsGroups' onClick={this.newRow}/>} content='Add another ingredient' /> : null}
        {this.state.otherIngredientsGroups === i+1 && this.state.otherIngredientsGroups > 1 ? <Popup trigger={<Form.Button size='small' circular color='red' icon='minus' category='otherIngredientsGroups' onClick={this.deleteRow}/>} content='Delete row' /> : null}
      </Form.Group>
    ))

    return (
      <Form size='small' onSubmit={this.handleSubmit}>
        <Form.Input label='Recipe Name' name='name' value={this.state.name} placeholder='e.g. My Awesome IPA' onChange={this.handleChange} required />
        <Form.Dropdown width={6} label='Style' name='style' value={this.state.style} placeholder='Select style' options={styleNames} onChange={this.handleChange} fluid search selection />
        <Header as='h5'>Malt</Header>
        {maltGroups}
        <Header as='h5'>Hops</Header>
        {hopsGroups}
        <Form.Input label='Yeast' name='yeast' value={this.state.yeast} placeholder='Yeast name' onChange={this.handleChange} />
        <Header as='h5'>Other Ingredients</Header>
        {otherIngredientsGroups}
        <Form.TextArea label='Directions' name='directions' value={this.state.directions} placeholder='Directions for brewing' onChange={this.handleChange} />
        <Form.Button content='Submit' />
      </Form>
    )
  }
}

export default RecipeForm;