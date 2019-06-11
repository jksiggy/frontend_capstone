import React, { Component } from "react"
import {
    Container, Col, Form, FormGroup, Label, Input,Button } from 'reactstrap';



export default class Register extends Component {

    state = {
        email: "",
        password: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange);
    }

    getAllUsers = evt => {
        evt.preventDefault();
        this.props.getAll()
            .then(allUsers => {
                let usersArray = allUsers.filter(user => {
                    return (user.email === this.state.email)
                })
                if (usersArray.length > 0) {
                    alert("email is not avaliable")
                }
                else {
                    alert("Registered!")
                    const newUser = {
                        email: this.state.email,
                        password: this.state.password
                    }
                    this.props.addUser(newUser)
                    this.props.history.push("/")
                }
            })
    }

    render() {
        return (
            <Container className="App">
                <p>Register a new account</p>
                <Form className="form">
                <Col>
                    <FormGroup>
                        <Label>Email:</Label>
                        <Input
                        type="email" required onChange={this.handleFieldChange}
                        name="email"
                        id="email"
                        placeholder="myemail@email.com"
                        />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label>Password:</Label>
                        <Input 
                        type="password" required onChange={this.handleFieldChange} 
                        name="password"
                        id="password"
                        placeholder="********"
                          />
                    </FormGroup>
                    </Col>
                    <Button 
                    type="submit"
                    color="primary"

                     className="" onClick={this.getAllUsers}> Register </Button>
                    </Form>
            </Container>
        )
    }
}