import React from 'react';
import { useLoaderData } from 'react-router';
import Banner from './Banner';
import CoffeeCard from './coffeeCard';

const Home = () => {
    const coffees = useLoaderData();
    console.log(coffees);
    return (
        <div>
            <Banner></Banner>

            <h1 className='rancho text-3xl text-center text-[#331A15] my-10 mt-20'>Our Popular Coffees</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-10  gap-6 mt-10">
                
                {
                coffees.map((coffee) => (
                    <CoffeeCard key={coffee._id} coffee={coffee} />
                ))
                }
                </div>

        </div>
    );
};

export default Home;