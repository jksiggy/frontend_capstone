import React, { Component } from 'react';
import { Card, } from 'reactstrap';
import FavoriteManager from '../../modules/FavoriteManager'




class PartyItem extends Component {

    state = {
        saveDisabled: false,
        isDisabled: false,
        currentUser: ""
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

        this.setState({ isDisabled: true });

        let userId = sessionStorage.getItem('User');
        const favorite = {
            partyId: parseInt(evt.target.id),
            userId: parseInt(userId)
        }
        //Create the favorite arry//
        this.props
            .addFavorite(favorite)
            
        }
        

        componentDidMount() {
        const sessionUser = sessionStorage.getItem('User')
        FavoriteManager.favoriteByUser(sessionUser, this.props.party.id).then(result => console.log("RESULT OF FECTH", result))
        let newFavoriteArray = this.props.favorites.find(favoriteParty => {
            return(favoriteParty.partyId === this.props.party.id)
        })

        if(newFavoriteArray){
        
            this.setState({isFavorite: true})
            this.setState({isDisabled: true})
        }


        this.setState({currentUser: sessionStorage.getItem('User')})
    }

        
    
        render() {

        return (
            <Card className="PartyItem">
                <article>
                    <h5>{this.props.party.name}</h5>
                    <h6>{this.props.party.location}</h6>
                    <time>{this.props.party.date}</time>
                    <br />

                    <h6>Created By: {this.props.party.fullname}</h6>
                    <br />

                    {this.state.currentUser == (this.props.party.userId) ? (
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

                    {this.state.isFavorite === true ? ( <p>FAVORITE</p>) : ( <p>NOT FAVORITE</p>)}
                </article>
            </Card>
        )
    }
}

export default PartyItem;