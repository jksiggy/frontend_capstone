import React, { Component } from 'react';
import { Link } from "react-router-dom";



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
            <article>
                <h3><q>{this.props.party.name}</q></h3>
                
                <button onClick={this.handleClick} disabled={this.state.saveDisabled} >Delete </button>
                <Link className="nav-link" to={`/parties/${this.props.party.id}`}>Details</Link>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push(`/parties/${this.props.party.id}/edit`);
                    }}
                >
                    Edit
            </button>
                <br /><hr />
            </article>
        )
    }
}

export default PartyItem;