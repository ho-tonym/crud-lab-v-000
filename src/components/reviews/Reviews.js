import React, { Component } from 'react';
import Review from './Review';

export default class Reviews extends Component {
  render() {
      const restaurantReviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId);
      const reviews = restaurantReviews.map((review, index) => {
        return <Review review={review} key={index} store={this.props.store} />
      });
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};
