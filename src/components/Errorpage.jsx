import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <div className=' text-center '>
                <h1 className='text-6xl text-center  mt-20 font-bold text-red-700'>😂oops😒</h1>

                <Link to='/' className='btn mt-20 btn-error'>Go To Home</Link>
            </div>
        </div>
    );
};

export default Errorpage;