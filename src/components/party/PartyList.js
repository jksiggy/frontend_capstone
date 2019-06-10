import React, {Component}from 'react';
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
                            this.props.history.push("/parties/new")}
                        }>
                   New PArty
                </Button>
            </div>
            <section className="parties">
                <h2>All Party</h2>
                {
                    this.props.parties.map((item) => {
                        return <PartyItem key={item.id} party={item} 
                        {...this.props}
                            deleteParty={this.props.deleteParty} />
                    })
                }
            </section>
            </React.Fragment>
            
        )
    }
}