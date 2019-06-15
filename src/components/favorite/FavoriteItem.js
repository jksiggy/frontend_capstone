import React, { Component } from 'react';
import { Card, } from 'reactstrap';



class FavoriteItem extends Component {

    render() {
        console.log(this.props.favorite)
        return (
            <Card>
                <article>
                    <h3>{this.props.favorite.party.name}</h3>
                    <h4>{this.props.favorite.party.location}</h4>
                    <time>{this.props.favorite.party.date}</time>
                    <br />
                    <br />
                    <h6>Created By: {this.props.favorite.party.fullname}</h6>



                </article>

            </Card>
        )
    }
}


export default FavoriteItem;