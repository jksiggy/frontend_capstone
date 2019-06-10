import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card,} from 'reactstrap';



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
        return (
                    <Card>
                        <article>
                            <h4>{this.props.party.name}</h4>
                            <h6>{this.props.party.location}</h6>
                            <time>{this.props.party.date}</time>
                            <br/>


                            <button onClick={this.handleClick} disabled={this.state.saveDisabled} >Delete </button>
                            <button
                                type="button"
                                onClick={() => {
                                    this.props.history.push(`/parties/${this.props.party.id}/edit`);
                                }}
                            >
                                Edit
            </button>
                            <hr />
                        </article>

                    </Card>
        )
    }
}

export default PartyItem;