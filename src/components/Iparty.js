import React, { Component } from "react"
import ApplicationViews from './ApplicationViews';
import IpartyNav from './nav/NavBar';
import JsonManager from '../modules/JsonManager';






class Iparty extends Component {
    constructor(props) {
        super(props);
        this.populateAppState = this.populateAppState.bind(this);
    }

    populateAppState() {
        JsonManager.getAll("users").then((users) => {
            this.setState({ users: users });
        });
    }

    componentDidMount() {
        this.populateAppState();
    }
    registerIt = (username, password, firstName) => {
        return JsonManager.registerIt(username, password, firstName);
    };

    getAllUsers = () => {
        return JsonManager.getAll("users");
    };

    addUser = (user) =>
        JsonManager.post("users", user)
            .then(() => this.populateAppState())
            .then(() => this.registerIt(user.username, user.password));

    isAuthenticated = () => sessionStorage.getItem("User") !== null;

    //Function to hide the navbar and show it after login
    showNav = () => {
        if (this.isAuthenticated()) {
            return (
                <IpartyNav/>
            );
        }
    };



    render() {
        return (
            <React.Fragment>
                {this.showNav()}
               
                <ApplicationViews

                    populateAppState={this.populateAppState}
                    registerIt={this.registerIt}
                    getAllUsers={this.getAllUsers}
                    addUser={this.addUser}
                />
            </React.Fragment>
        )
    }
}

export default Iparty