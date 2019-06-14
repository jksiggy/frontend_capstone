import React, { Component } from 'react';
import { Card, } from 'reactstrap';



class PartyItem extends Component {

    state = {
        saveDisabled: false
    }

    handleClick = (event) => {
        console.log("click", event, this.props.party.id);
        this.setState(
            { saveDisabled: true },

            () => this.props.deleteParty(this.props.party.id)
        )
    }



    render() {
        const currentUser = sessionStorage.getItem('User')

        return (
            <Card>
                <article>
                    <h3>{this.props.party.name}</h3>
                    <h4>{this.props.party.location}</h4>
                    <time>{this.props.party.date}</time>
                    <br/>
                    <br/>
                    <h6>Created By: {this.props.party.fullname}</h6>

                    <br />

                    {currentUser == (this.props.party.userId)  ?  (
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

                             <button onClick={this.handleClick} disabled={this.state.saveDisabled} >Favorite </button>
                        </>
                        
                        ) : (

                            <button onClick={this.handleClick} disabled={this.state.saveDisabled} >Favorite </button>

                        
                               

                                )}

                            


                        



                    
                </article>

            </Card>
        )
    }
}

export default PartyItem;