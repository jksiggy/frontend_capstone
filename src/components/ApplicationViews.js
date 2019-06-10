import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import PartyManager from "../modules/PartyManager";
import PartyList from './party/PartyList'


class ApplicationViews extends Component {
    state = {
      parties: [],
      
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
              </React.Fragment>
          )
      }
   
}

export default ApplicationViews;