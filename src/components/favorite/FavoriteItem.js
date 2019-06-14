import React, { Component } from 'react';
import { Card, } from 'reactstrap';



class FavoriteItem extends Component {

  





    render() {
console.log(this.props.favorite)
        return (
            <Card>
                <article>
                    <h3>{this.props.favorite.party.name}</h3>
                    
                    

                </article>

            </Card>
        )
    }
}


export default FavoriteItem;