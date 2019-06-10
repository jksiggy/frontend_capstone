import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import PartyManager from "../modules/PartyManager";
import PartyList from './party/PartyList'
import PartyAddForm from './party/PartyAddForm';
import PartyEdit from './party/PartyEdit'


class ApplicationViews extends Component {
    state = {
      parties: [],
 };
 deleteParty = (id) => {
    const newState = {};
    PartyManager.deleteParty(id)
        .then(PartyManager.getAll)
        .then(parties => {
            console.log("parties", parties);
            newState.parties = parties
        })
        .then(() => {
           
            this.setState(newState)
        })
    }

    addParty = party =>
    PartyManager.post(party)
        .then(() => PartyManager.getAll())
        .then(parties =>
            this.setState({
                parties: parties
            })
        );

        updateParty = (editedPartyObject) => {
            return PartyManager.put(editedPartyObject)
                .then(() => PartyManager.getAll())
                .then(parties => {
                    this.setState({
                        parties: parties
                    })
                });
        };

    componentDidMount() {
        const newState = {};
    
        PartyManager.getAll()
          .then((parties) => (newState.parties = parties))
          .then(() => this.setState(newState));
      }

      render() {
          return (
              <React.Fragment>
                   <Route exact path="/parties" render={(props) => {
                    return <PartyList  {...props}
                        deleteParty={this.deleteParty}
                        parties={this.state.parties} />
                }} />
                <Route path="/parties/new" render={(props) => {
                    return <PartyAddForm {...props}
                        addParty={this.addParty} />
                }} />
                <Route path="/parties/:partyId(\d+)/edit" render={props => {
                    return <PartyEdit {...props}  updateParty={this.updateParty} />
                }}
                />

              </React.Fragment>
          )
      }
   
}

export default ApplicationViews;