import React, { Component } from 'react';
import { Card, } from 'reactstrap';



class PartyItem extends Component {

    state = {
        saveDisabled: false,
        toggleDisabled: false
    }

    handleClick = (event) => {
        console.log("click", event, this.props.party.id);
        this.setState(
            { saveDisabled: true },
            () => this.props.deleteParty(this.props.party.id)
        )
    }
    constructNewFavorite = evt => {
    
        if (this.state.disabled) {
            return;
        }
        this.setState({disabled: true});

        let userId = sessionStorage.getItem('User');
        const favorite = {
            partyId: parseInt(evt.target.id),
            userId: parseInt(userId)
        };

        // Create the party//
        this.props
            .addFavorite(favorite)

    };

    render() {
        const currentUser = sessionStorage.getItem('User')

        return (
            <Card>
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
                                onClick={this.constructNewFavorite}
                                disabled={this.state.disabled} 
                                    disabled={this.state.disabled}>
                                     {this.state.disabled ? 'Added' : 'Add Favorite'}
                                </button>
                        </>

                    ) : (

                            <button
                                type="submit"
                                id={this.props.party.id} 
                                onClick={this.constructNewFavorite} 
                                disabled={this.state.disabled}>
                                     {this.state.disabled ? 'Added' : 'Add Favorite'}
                                </button>

                        )}
                </article>
            </Card>
        )
    }
}

export default PartyItem;