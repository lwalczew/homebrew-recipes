import React from 'react';
import {Accordion, Button, Table} from 'semantic-ui-react';
import ShowRecipeModal from './ShowRecipeModal';

const RecipeList = (props) => {
  
  const accordionPanels = props.recipes.map(recipe => ({
    title: {
      content: recipe.name,
      key: `title-${recipe.id}`
    },
    content: {
      content: (
        <div>
          <Table definition>
            <Table.Body>
              <Table.Row>
                <Table.Cell style={{verticalAlign: 'top'}}>Style:</Table.Cell>
                <Table.Cell>{recipe.style}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{verticalAlign: 'top'}}>Malt:</Table.Cell>
                <Table.Cell>{recipe.malt.map((malt, i) => <div key={i}>{malt.name}, {malt.amount}<br/></div>)}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{verticalAlign: 'top'}}>Hops:</Table.Cell>
                <Table.Cell>{recipe.hops.map((hop, i) => <div key={i}>{hop.name}, {hop.amount}, {hop.time}<br/></div>)}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{verticalAlign: 'top'}}>Yeast:</Table.Cell>
                <Table.Cell>{recipe.yeast}</Table.Cell>
              </Table.Row>
              {recipe.otherIngredients[0].name.length ? <Table.Row>
                <Table.Cell style={{verticalAlign: 'top'}}>Other:</Table.Cell>
                <Table.Cell>{recipe.otherIngredients.map((otherIngredient, i) => <div key={i}>{otherIngredient.name}, {otherIngredient.amount}, {otherIngredient.time}<br/></div>)}</Table.Cell>
              </Table.Row> : null}
              <Table.Row>
                <Table.Cell style={{verticalAlign: 'top'}}>Directions:</Table.Cell>
                <Table.Cell>{recipe.directions}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <ShowRecipeModal newOrEdit='edit' recipeToEdit={recipe} modalName='Edit Recipe' />
          <Button color='red' content='Delete Recipe' onClick={() => props.onDeleteClick(recipe.id)}/>
        </div>
      ),
      key: `content-${recipe.id}`
    }
    
  }));


  return (
    <Accordion panels={accordionPanels} styled/>
  )

}

export default RecipeList;