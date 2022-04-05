import React from 'react';
import { StarIcon } from '@heroicons/react/solid'
import './HomeReview.css';


const HomeReview = ({ review }) => {
    return (
        <div className='flex justify-center border rounded bg-teal-200 p-4'>
            <div>
                <h1 className='font-bold'>Name: {review.name}</h1>
                <p>Comment: {review.comment}</p>

                <div className='flex'>
                    <StarIcon className='icon'></StarIcon>
                    <StarIcon className='icon'></StarIcon>
                    <StarIcon className='icon'></StarIcon>
                    <StarIcon className='icon'></StarIcon>
                    <StarIcon className='icon'></StarIcon>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;