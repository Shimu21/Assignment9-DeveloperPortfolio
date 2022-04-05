import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import './ReviewCart.css'

const ReviewCart = ({ review }) => {
    return (
        <div>
            <h1 className='font-bold'>Name: {review.name}</h1>
            <p>comment: {review.comment}</p>
            <div className='flex'>
                <StarIcon className='icon'></StarIcon>
                <StarIcon className='icon'></StarIcon>
                <StarIcon className='icon'></StarIcon>
                <StarIcon className='icon'></StarIcon>
                <StarIcon className='icon'></StarIcon>
            </div>

        </div>
    );
};

export default ReviewCart;