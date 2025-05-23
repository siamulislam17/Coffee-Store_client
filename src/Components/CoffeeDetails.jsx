import React from 'react';
import { useLoaderData } from 'react-router'; // use react-router-dom

const CoffeeDetails = () => {
    const { id, name, photo, category, supplier, chef, details, price } = useLoaderData();
    console.log(id);

    return (
        <div className="max-w-5xl my-29 mx-auto mt-12 p-6 md:p-10 bg-gradient-to-br from-[#f9f4f1] to-[#fff] rounded-2xl shadow-xl">
            <div className="flex md:flex-row flex-col gap-8 items-center">
                {/* Image Section */}
                <div>
                    <img
                        src={photo}
                        alt={name}
                        className="w-full h-72  rounded-xl shadow-md border-2 border-[#331A15]"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/400x250?text=No+Image';
                        }}
                    />
                </div>

                {/* Details Section */}
                <div>
                    <h1 className="text-4xl rancho font-extrabold text-[#331A15] mb-4">{name}</h1>
                    <div className="space-y-2 text-[#4a3a36] text-lg">
                        <p><span className="font-semibold text-[#331A15]">Category:</span> {category}</p>
                        <p><span className="font-semibold text-[#331A15]">Supplier:</span> {supplier}</p>
                        <p><span className="font-semibold text-[#331A15]">Chef:</span> {chef}</p>
                        <p><span className="font-semibold text-[#331A15]">Details:</span> {details}</p>
                        <p><span className="font-semibold text-[#331A15]">Price:</span> <span className="text-green-700">${price}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;
