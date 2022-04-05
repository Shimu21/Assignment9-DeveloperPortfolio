import React from 'react';
import Review from '../Review/Review';

const ReviewCart = ({ review }) => {
    return (
        <div>
            <h1>Name: {review.name}</h1>
            <p>comment: {review.comment}</p>
        </div>
    );
};

export default ReviewCart;