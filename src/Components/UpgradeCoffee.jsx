import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpgradeCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, chef, supplier, taste, price, details, photo } = coffee;

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const price = form.price.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, chef, supplier, taste, price, details, photo };
        console.log(updatedCoffee);
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Coffee Updated',
                        text: 'Your coffee has been updated successfully',
                        icon: 'success',
                        timer: 2000,
                        showConfirmButton: false 
                    })
                }
            });

    }
    return (
        <div className='max-w-5xl my-29 mx-auto mt-12 p-6 md:p-10 bg-gradient-to-br from-[#f9f4f1] to-[#fff] rounded-2xl shadow-xl'>
        <h1 className="text-4xl text-center rancho font-extrabold text-[#331A15] mb-4">Update Coffee</h1>
            <form onSubmit={handleUpdateCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input defaultValue={name} required type="text" name="name" placeholder="Enter coffee name" className="p-2 px-3 rounded-md bg-amber-100 text-black font-semibold input-bordered w-full" />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input defaultValue={chef} required type="text" name="chef" placeholder="Enter coffee chef" className="p-2 px-3 rounded-md bg-amber-100 text-black font-semibold  input-bordered w-full" />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input defaultValue={supplier} required type="text" name="supplier" placeholder="Enter coffee supplier" className="p-2 px-3 rounded-md bg-amber-100 text-black font-semibold  input-bordered w-full" />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input defaultValue={taste} required type="text" name="taste" placeholder="Enter coffee taste" className="p-2 px-3 rounded-md bg-amber-100 text-black font-semibold  input-bordered w-full" />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input defaultValue={price} required type="text" name="price" placeholder="Enter coffee Price" className="p-2 px-3 rounded-md bg-amber-100 text-black font-semibold  input-bordered w-full" />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input defaultValue={details} required type="text" name="details" placeholder="Enter coffee details" className="p-2 px-3 rounded-md bg-amber-100 text-black font-semibold  input-bordered w-full" />
          </div>

          <div className="md:col-span-2">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input defaultValue={photo} required type="text" name="photo" placeholder="Enter photo URL" className="p-2 px-3 rounded-md bg-amber-100 text-black font-semibold input-bordered w-full" />
          </div>

          <div className="md:col-span-2">
            <button type="submit" className="btn w-full bg-[#D2B48C] hover:bg-[#b4936b] text-black text-lg font-medium">
              Update
            </button>
          </div>
        </form>
        </div>
    );
};

export default UpgradeCoffee;