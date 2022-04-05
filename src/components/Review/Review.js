import React from 'react';
import useReview from '../../hook/useReview';
import './Review.css';
import ReviewCart from '../ReviewCart/ReviewCart';


const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-8 mb-8'>Client's <span className='text-teal-700'>feedback</span> </h1>
            <div className='cart mb-96'>

                {
                    reviews.map(review => <ReviewCart review={review}></ReviewCart>)
                }
            </div>
        </div>
    );
};

export default Review;