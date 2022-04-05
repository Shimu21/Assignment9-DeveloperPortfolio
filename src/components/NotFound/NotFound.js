import React from 'react';
import { EmojiSadIcon } from '@heroicons/react/solid';


const NotFound = () => {
    return (
        <div className='flex justify-center mt-16 mb-60'>
            <h1 className='text-5xl font-bold mt-8'>Page Not Found</h1>
            <EmojiSadIcon className='h-36 w-36 align-middle	text-red-700'></EmojiSadIcon>
        </div>
    );
};

export default NotFound;