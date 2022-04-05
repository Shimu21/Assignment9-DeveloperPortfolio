import React from 'react';

const HomeReview = ({ review }) => {
    return (
        <div>
            <h1>name: {review.name}</h1>
            <p>comment: {review.comment}</p>
        </div>
    );
};

export default HomeReview;