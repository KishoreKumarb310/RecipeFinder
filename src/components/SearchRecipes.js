import React, {Component} from 'react';
import {Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {setRecipes} from '../actions';

class SearchRecipes extends Component{

    constructor(){
        super();
        this.state = {
            ingredients : '',
            dish : ''
        }
    }

    search(){
        let {ingredients, dish} = this.state;
        const url = `http://www.recipepuppy.com/api?i=${ingredients}&q=${dish}`;
        console.log('this.state', this.state);
        
        fetch(url, {
            method :'GET',

        }).then(response => response.json())
          .then(json => this.props.setRecipes(json.results));
    }

    render(){
        return(
            <div>
                <Form inline>
                    <FormGroup>
                        <FormLabel>Ingredients</FormLabel>
                        {'  '}
                        <FormControl 
                            type="text" 
                            onChange={event => this.setState({ingredients : event.target.value})}
                            placeholder = "garlic, chicken"/>
                    </FormGroup>
                    {'  '}
                    <FormGroup>
                        <FormLabel>Dish</FormLabel>
                        {'  '}
                        <FormControl 
                            type="text" 
                            onChange={event => this.setState({dish : event.target.value})}
                            placeholder = "adobo"/>
                    </FormGroup>
                    {'  '}
                    <Button onClick={() => this.search()}>Submit</Button>
                </Form> 
            </div>
        )
    }
}

export default connect(null, {setRecipes})(SearchRecipes);