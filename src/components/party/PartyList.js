import React, { Component } from 'react';
import PartyItem from './PartyItem';
import { Button } from 'reactstrap';





export default class PartyList extends Component {

    render() {
        return (

            <React.Fragment>

                <div className="partyButton">
                    <Button color="info"
                        type="button"
                        onClick={() => {
                            this.props.history.push("/parties/new")
                        }
                        }>
                        New Party
                </Button>
                </div>

                <section className="parties">
                    {
                        this.props.parties.map((item) => {
                            return <PartyItem key={item.id} party={item}
                                {...this.props}
                                deleteParty={this.props.deleteParty}
                                addFavorite={this.props.addFavorite} />
                        })
                    }
                </section>

            </React.Fragment>

        )
    }
}