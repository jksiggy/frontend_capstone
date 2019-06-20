import React, { Component } from 'react';
import { Card, } from 'reactstrap';



class FavoriteItem extends Component {

    state = {
        saveDisabled: false
    }

    handleClick = (event) => {
        console.log("click", event, this.props.favorite.id);
        this.setState(
            { saveDisabled: true },
            () => this.props.deleteFavorite(this.props.favorite.id)
        )
    }

    render() {
        return (
            <Card>
                <article>
                    <h3>{this.props.favorite.party.name}</h3>
                    <h4>{this.props.favorite.party.location}</h4>
                    <time>{this.props.favorite.party.date}</time>
                    <br />
                    <br />
                    <h6>Created By: {this.props.favorite.party.fullname}</h6>

                    <button onClick={this.handleClick} disabled={this.state.saveDisabled} >Delete </button>



                </article>

            </Card>
        )
    }
}


export default FavoriteItem;