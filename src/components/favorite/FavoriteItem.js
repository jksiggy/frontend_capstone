import React, { Component } from 'react';
import { Container,Card,Col, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';



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
            <Container className="favoriteContainer">
            
          
            <Card className="favoriteCard">
            <CardImg width="250px" src={this.props.favorite.party.img} alt="Image" />
               <CardBody>
                    <CardTitle>{this.props.favorite.party.name}</CardTitle>
                    <CardText>{this.props.favorite.party.location}</CardText>
                    <time>{this.props.favorite.party.date}</time>
                    <CardText>Created By: {this.props.favorite.party.fullname}</CardText>

                    <button onClick={this.handleClick} disabled={this.state.saveDisabled} >Delete </button>
                    </CardBody>
            </Card>
          
            </Container>
        )
    }
}


export default FavoriteItem;