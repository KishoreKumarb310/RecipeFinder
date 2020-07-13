import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import RecipeItem from './RecipeItem';

class FavouriteRecipe extends Component{

    render(){
        return(
            <div>
            <h4 className="link"><Link to="/">Home</Link></h4>
            <h4>Favourited Recipes</h4>
            {
                this.props.favouriteRecipe.map((recipe, index) => {
                    return(
                        <RecipeItem key={index} recipe={recipe} favFlow={true} />    
                    )
                })
            }
        </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, null)(FavouriteRecipe);