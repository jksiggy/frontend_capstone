import React, { Component } from "react";


export default class PartyForm extends Component {
    // Set initial state
    state = {
        partyName: "",
        location: "",
        date: "",
        
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*
          Local method for validation, creating party object, and
          invoking the function reference passed from parent component
       */
    constructNewParty = evt => {
        evt.preventDefault();

        let userId = sessionStorage.getItem('User')
        let fullname = sessionStorage.getItem('Fullname')
        const party = {
            name: this.state.partyName,
            location: this.state.location,
            date: this.state.date,
            fullname: fullname,
            userId:parseInt(userId)

        };

        // Create the party and redirect user to party list
        this.props
            .addParty(party)
            .then(() => this.props.history.push("/parties"));

    };

    render() {
        return (
            <React.Fragment>
                <form className="partyForm">
                    <div className="form-group">
                        <label htmlFor="partyName">Party Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="partyName"
                            placeholder="Party Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">location</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="location"
                            placeholder="Location"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">date</label>
                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="date"
                            placeholder="Date"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewParty}
                        className="btn btn-primary"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        );
    }
}