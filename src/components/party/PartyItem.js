import React, { Component } from 'react';
import { Card, } from 'reactstrap';
import FavoriteManager from '../../modules/FavoriteManager';



class PartyItem extends Component {

    state = {
        saveDisabled: false,
        isDisabled: false
    }

    handleClick = (event) => {
        console.log("click", event, this.props.party.id);
        this.setState(
            { saveDisabled: true },
            () => this.props.deleteParty(this.props.party.id)
        )
    }

    
    buttonSet = evt => {
        evt.preventDefault();
        FavoriteManager.favoriteByUser()
        .then(favoriteParties => {
            console.log("favoriteParties", favoriteParties)
            let newFavoriteArray = favoriteParties.find(favoriteParty => {
                console.log("PartyId", favoriteParty)
                console.log("propsPartiesId", this.props.party.id)
                return (favoriteParty.partyId === this.props.party.id)
                
            })
            console.log("newFavoriteArray", newFavoriteArray)
            
            if (newFavoriteArray === null) 
            
            return
            this.setState({ isDisabled: true });
        }
        )
        let userId = sessionStorage.getItem('User');
        const favorite = {
            partyId: parseInt(evt.target.id),
                userId: parseInt(userId)
            }
            //Create the favorite arry//
            this.props
            .addFavorite(favorite)
        }


        render() {
        const currentUser = sessionStorage.getItem('User')
        
        // let favoriteArray = FavoriteManager.favoriteByUser()
        
        // const buttonToggle = favoriteArray.find(favorite => favorite.partyId === (this.props.party.id))
        // console.log("favorite", favoriteArray);
        // console.log("buttonToggle", buttonToggle)
        
        return (
            <Card className="PartyItem">
                <article>
                    <h5>{this.props.party.name}</h5>
                    <h6>{this.props.party.location}</h6>
                    <time>{this.props.party.date}</time>
                    <br />

                    <h6>Created By: {this.props.party.fullname}</h6>
                    <br />

                    {currentUser == (this.props.party.userId) ? (
                        <>
                            <button onClick={this.handleClick} disabled={this.state.saveDisabled} >Delete </button>

                            <button
                                type="button"
                                onClick={() => {
                                    this.props.history.push(`/parties/${this.props.party.id}/edit`);
                                }}
                            >
                                Edit
                             </button>

                            <button
                                type="submit"
                                id={this.props.party.id}
                                onClick={this.buttonSet}
                                disabled={this.state.isDisabled}>
                                {this.state.isDisabled ? 'Added' : 'Add Favorite'}
                            </button>
                        </>

                    ) : (

                            <button
                                type="submit"
                                id={this.props.party.id}
                                onClick={this.buttonSet}
                                disabled={this.state.isDisabled}>
                                {this.state.isDisabled ? 'Added' : 'Add Favorite'}
                            </button>


                        )}
                </article>
            </Card>
        )
    }
}

export default PartyItem;