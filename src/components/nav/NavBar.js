import React, { Component } from "react"
import { Link } from "react-router-dom";
import { Nav, NavItem, NavBar, NavLink,Navbar } from 'reactstrap';


class IpartyNav extends Component {

    logout = () => {
        sessionStorage.clear();
        window.location.href = '/';
    }

    render() {
        return (
            <Navbar color="light" light expand="md" na-light blue flex-md-nowrap p-0 shadow>
               <Nav tabs>
               <NavItem>
                        <NavLink href="/parties" active>Party</NavLink>
                        </NavItem>
                    <NavItem>
                        <NavLink href="/favorites" active>Favorite</NavLink>
                        </NavItem>
                    <NavItem>
                        <NavLink  onClick={this.logout} >Logout</NavLink>
                        </NavItem>
               
            </Nav>
            </Navbar>
        )
    }
}

export default IpartyNav