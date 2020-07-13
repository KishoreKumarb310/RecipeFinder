import React, {Component} from 'react';

import {favouriteRecipe} from '../actions';
import {connect} from 'react-redux';

class RecipeItem extends Component{

    constructor(){
        super();
        this.state = {
            favourited : false
        }
    }

    favourite(recipe){
        this.props.favouriteRecipe(recipe);
        this.setState({favourited : true});
    }
    
    render(){
        let {recipe, favFlow} = this.props;

        return(
            <div className ="recipe-item">
                {  
                    !favFlow ?
                        (this.state.favourited ?
                        <div className ="star">&#9733;</div> :
                        <div className ="star" onClick={() => this.favourite(recipe)}>&#9734;</div>)
                    : (<div></div>)

                }
                <div className="recipe-text">
                    <a href={recipe.href}>
                        <h4>{recipe.title}</h4>
                    </a>
                    <p>
                        {recipe.ingredients}
                    </p>
                </div>
                <img className="recipe-image" src={recipe.thumbnail} alt={recipe.title} /> 
            </div>
            
        )
    }
}

export default connect(null, {favouriteRecipe})(RecipeItem);