import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-8 mb-8'>Blogs of <span className='text-teal-700'>Exclusive Ladies Bags</span> </h1>
            <div className='md:flex justify-between'>
                <div>
                    <h1>Question 1: What is Context API ? What is the purpose of it?</h1>
                    <p>Answer: Context provides a way to pass data through the component
                        tree without having to pass props manually at all level.
                        It allows to share values between components without having to explicity
                        pass a prop through every level of the tree.
                    </p>
                    <p>Purpose: The context API is a React structure that enables you to exchange unique details
                        and assists in solving prop-drilling from all levels of your application.
                    </p>
                </div>
                <div>
                    <h1>Question 2: What is SEmantic Tag?</h1>
                    <p>Answer: A Semantic element clearly describes its meaning to both the browser and the developer.
                        It clearly describes their meaning in a human and machine readable way.
                        Elements such as table, form, header, footer, etc. In programming, Semantics refers to the meaning of
                        a piece of code.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;