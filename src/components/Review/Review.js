import React from 'react';
import useReview from '../../hook/useReview';
import './Review.css';
import ReviewCart from '../ReviewCart/ReviewCart';

const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='cart'>
            {
                reviews.map(review => <ReviewCart review={review}></ReviewCart>)
            }
        </div>
    );
};

export default Review;