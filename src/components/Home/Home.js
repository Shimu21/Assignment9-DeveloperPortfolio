import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hook/useReview';
import image from '../../Img/yellow-bag.jpg'
import HomeReview from '../HomeReview/HomeReview';

const Home = () => {
    const [reviews, setReviews] = useReview();
    const slice3 = reviews.slice(0, 3);
    return (
        <div>
            <div className='container items-center justify-center grid md:grid-cols-2 gap-3 mt-8'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h1 className='text-6xl font-bold'>Exclusive Ladies Bags at <br /> <span className='text-teal-700	'> Reasonable Price</span> </h1>
                    <p className='text-xl mt-16'>Here you will get exclusive, fashionable eye-catching ladies hand bags.
                        Most demanding party bags are available at our store. Long lasting and easy to carrying. All bags are made in pure
                        leather, with various color combinations. </p>
                    <button className='font-bold bg-teal-700 p-2 px-8 mt-16 rounded hover:bg-sky-700'>Exclusive Arrivals</button>
                </div>
            </div>

            <div>
                <h2 className='text-4xl font-bold flex justify-center'>Client's<span className='text-teal-700 ml-4 mb-4'> Opinion</span> </h2>
                <div className='grid md:grid-cols-3 gap-3'>
                    {
                        slice3.map(review => <HomeReview review={review}></HomeReview>)
                    }
                </div>
                <div className='flex justify-center'>
                    <Link to="/review"><button className='font-bold bg-teal-700 p-2 px-8 mt-16 mb-16 rounded hover:bg-sky-700'>Click for Reviews</button></Link>
                </div>
            </div>
        </div>

    );
};


export default Home;