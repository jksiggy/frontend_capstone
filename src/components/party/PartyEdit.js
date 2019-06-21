import React, { Component } from "react"
import PartyManager from "../../modules/PartyManager"
import { Container} from 'reactstrap';


export default class PartyEdit extends Component {
    // Set initial state
    state = {
        partyName: "",
        location: "",
        date: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingParty = evt => {
        evt.preventDefault()

        let userId = sessionStorage.getItem('User')
        let fullname = sessionStorage.getItem('Fullname')
        const editedParty = {
            id: this.props.match.params.partyId,
            name: this.state.partyName,
            location: this.state.location,
            date: this.state.date,
            fullname: fullname,
            userId: parseInt(userId)
        };

        this.props.updateParty(editedParty)
            .then(() => this.props.history.push("/parties"))

    }

    componentDidMount() {
        PartyManager.get(this.props.match.params.partyId)
            .then(party => {
                this.setState({
                    partyName: party.name,
                    location: party.location,
                    date: party.date
                });
            });
    }


    render() {
        return (
            <React.Fragment>
                 <Container className="EditParty">
                <form className="partyForm">
                    <div className="form-group">
                        <label htmlFor="partyName">Party Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="partyName"
                            value={this.state.partyName}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="location"
                            value={this.state.location}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="date"
                            value={this.state.date}
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={this.updateExistingParty}
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
                </Container>
            </React.Fragment>
        );
    }
}