import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText, Button,Container,Row, Col, ButtonGroup} from 'reactstrap';





class PartyItem extends Component {

    state = {
        saveDisabled: false,
        isDisabled: false,
        currentUser: ""
    }

    handleClick = (event) => {
        console.log("click", event, this.props.party.id);
        this.setState(
            { saveDisabled: true },
            () => this.props.deleteParty(this.props.party.id)
        )
    }


    buttonSet = evt => {
        evt.preventDefault();

        this.setState({ isDisabled: true });

        let userId = sessionStorage.getItem('User');
        const favorite = {
            partyId: parseInt(evt.target.id),
            userId: parseInt(userId)
        }
        //Create the favorite arry//
        this.props
            .addFavorite(favorite)

    }
    // this.props.favorites.filter(favorited => favorited.userId == sessionStorage.getItem("User"))

    componentDidMount() {
        let newFavoriteArray = this.props.favorites.find(favoriteParty => {
            return (favoriteParty.partyId === this.props.party.id &&
                favoriteParty.userId === parseInt(sessionStorage.getItem("User")))
        })
        console.log("newFavoriteArray", newFavoriteArray)
        // let favoriteButton = this.props.favorites.filter(favorited => )
        // console.log("favoriteButton", favoriteButton)
       
        if (newFavoriteArray) {
            this.setState({ isDisabled: true })
        }
        this.setState({ currentUser: sessionStorage.getItem('User') })
    }



    render() {

        return (
            <Container>
                 <Col>
                 <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card className="PartyItem">
               <CardBody>
                <CardTitle>{this.props.party.name}</CardTitle>
                <CardText>{this.props.party.location}</CardText>
                    <CardText>{this.props.party.date}</CardText>

                    <CardText>Created By: {this.props.party.fullname}</CardText>
                    <br />
                    </CardBody>
                    {this.state.currentUser == (this.props.party.userId) ? (
                        <>
                        <ButtonGroup>
                            <Button color="danger" size="sm" onClick={this.handleClick} disabled={this.state.saveDisabled} >Delete </Button>

                            <Button color="info" size="sm"
                                onClick={() => {
                                    this.props.history.push(`/parties/${this.props.party.id}/edit`);
                                }}
                            >
                                Edit
                             </Button>

                            <Button color="secondary" size="small"
                                id={this.props.party.id}
                                onClick={this.buttonSet}
                                disabled={this.state.isDisabled}>
                               {this.state.isDisabled ? 'Added' : 'Add Favorite'}
                                </Button>
                                </ButtonGroup>
                        </>

                    ) : (

                            <Button color="secondary" size="small"
                                id={this.props.party.id}
                                onClick={this.buttonSet}
                                disabled={this.state.isDisabled}>
                                {this.state.isDisabled ? 'Added' : 'Add Favorite'}
                            </Button>

                        )}
            </Card>
            </Col>
            </Col>
            </Container>
        )
    }
}

export default PartyItem;