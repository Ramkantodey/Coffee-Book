import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';

const Coffees = () => {
    const data = useLoaderData();

    const [coffees, setCoffees] = useState(data)

    const handleSort = (sortBy) => {
        if (sortBy === 'popularity') {
            //sort by popularity

            const sorted = [...data].sort((a, b) => a.popularity - b.popularity)
            setCoffees(sorted)
        }
        else if (sortBy === 'rating') {
            //sort by rating
            const sorted = [...data].sort((a, b) => b.rating - a.rating)
            setCoffees(sorted)
        }
    }

    return (
        <>

            {/* <div>
                    <h1 className='md:text-3xl font-thin'>Sort Coffee&apos;s by Rating-&gt;</h1>
                </div> */}
            <div className='space-x-4 flex  flex-col items-center gap-4 md:flex-row justify-between'>
                <button onClick={() => handleSort('popularity')} className='btn btn-warning  font-bold'>Sort By Popularity (ASC)</button>
                <button onClick={() => handleSort('rating')} className='btn px-7  btn-warning font-bold'>Sort By Rating (DSC)</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
                {
                    coffees.map(coffee => <Card coffee={coffee} key={coffee.id}></Card>)
                }
            </div>
        </>
    );
};

export default Coffees;
