import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCards = () => {

    const navigate = useNavigate();

    const data = useLoaderData();
    console.log(data);
    const { category } = useParams()
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(coffee => coffee.category === category)
            setCoffees(filteredByCategory);
        }
        else {
            setCoffees(data.slice(0, 6))
        }
    }, [category, data])
    console.log(category);
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
                {
                    coffees.map(coffee => <Card coffee={coffee} key={coffee.id}></Card>)
                }
            </div>
            <button onClick={() => navigate('/coffees')} className='btn btn-warning'>View All</button>
        </>
    );
};

export default CoffeeCards;