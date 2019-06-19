import React, { Component } from 'react';
import FavoriteItem from './FavoriteItem';






export default class FavoriteList extends Component {

    render() {
        return (
            <React.Fragment>

                <section className="favorites">
                    {
                        this.props.favorites.map((item) => {
                            return <FavoriteItem key={item.id} favorite={item}
                                {...this.props}
                                deleteFavorite={this.props.deleteFavorite} />
                        })
                    }
                </section>
            </React.Fragment>

        )
    }
}