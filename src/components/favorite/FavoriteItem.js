import React, { Component } from 'react';
import { Container,Card,Col, CardBody, CardTitle, CardText } from 'reactstrap';



class FavoriteItem extends Component {

    state = {
        saveDisabled: false
    }

    handleClick = (event) => {
        console.log("click", event, this.props.favorite.id);
        this.setState(
            { saveDisabled: true },
            () => this.props.deleteFavorite(this.props.favorite.id)
        )
    }

    render() {
        return (
            <Container>
            <Col>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card className="FavoriteItem">
               <CardBody>
                    <CardTitle>{this.props.favorite.party.name}</CardTitle>
                    <CardText>{this.props.favorite.party.location}</CardText>
                    <time>{this.props.favorite.party.date}</time>
                    <CardText>Created By: {this.props.favorite.party.fullname}</CardText>

                    <button onClick={this.handleClick} disabled={this.state.saveDisabled} >Delete </button>
                    </CardBody>
            </Card>
            </Col>
            </Col>
            </Container>
        )
    }
}


export default FavoriteItem;