import { Route, } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from "react-router";
import PartyManager from "../modules/PartyManager";
import PartyList from './party/PartyList'
import PartyAddForm from './party/PartyAddForm';
import PartyEdit from './party/PartyEdit'
import Register from "../users/Register";
import Login from "../users/Login";
import FavoriteManager from "../modules/FavoriteManager"
import FavoriteList from "./favorite/FavoriteList"






class ApplicationViews extends Component {
    state = {
        parties: [],
        favorites: []
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

    deleteFavorite = (id) => {
        const newState = {};
        FavoriteManager.deleteFavorite(id)
        .then(FavoriteManager.getAllFavorite)
        .then(favorites => {
            console.log("favorites", favorites);
            newState.favorites = favorites
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
        
        addFavorite = favorite =>
        FavoriteManager.post(favorite)
        .then(() => FavoriteManager.getAllFavorite())
        .then(favorites =>{
            console.log("FAVORITE ADDED", favorites)
            this.setState({
                favorites: favorites
            })}
            );

        
            

    ShowFavorite = favorites =>
    FavoriteManager.getAllFavorite(favorites)
    .then(favorites =>
                this.setState({
                    favorites: favorites
                }));
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
        
        favoriteArray = FavoriteManager.favoriteByUser()
        

    componentDidMount() {
        const newState = {};

        PartyManager.getAll()
        .then((parties) => (newState.parties = parties))
            .then(FavoriteManager.getAllFavorite)
            .then((favorites) => (newState.favorites = favorites))
            .then(() => this.setState(newState));


    }



    render() {
console.log("FAVORITES FROM STATE", this.state.favorites)
        return (
            <React.Fragment>
                <Route exact path="/parties" render={(props) => {
                    return <PartyList  {...props}
                        deleteParty={this.deleteParty}
                        addFavorite={this.addFavorite}
                        parties={this.state.parties}
                        favorites={this.state.favorites}
                     />
                }} />
                <Route path="/parties/new" render={(props) => {
                    return <PartyAddForm {...props}
                        addParty={this.addParty} />
                }} />
                <Route path="/parties/:partyId(\d+)/edit" render={props => {
                    return <PartyEdit {...props} updateParty={this.updateParty} />
                }}
                />
                <Route
                    path="/register"
                    render={(props) => {
                        return (
                            <Register
                                {...props}
                                addUser={this.props.addUser}
                                users={this.props.users}
                                registerIt={this.props.registerIt}
                                getAll={this.props.getAllUsers}
                            />
                        );
                    }}
                />
                <Route
                    exact
                    path="/"
                    render={(props) => {
                        return (
                            <Login
                                {...props}
                                populateAppState={this.props.populateAppState}
                                registerIt={this.props.registerIt}
                            />
                        );
                    }}
                />
                <Route exact path="/favorites" render={(props) => {
                    return <FavoriteList  {...props}
                        deleteFavorite={this.deleteFavorite}
                        favorites={this.state.favorites} />
                }} />


            </React.Fragment>
        )
    }

}

export default withRouter(ApplicationViews);