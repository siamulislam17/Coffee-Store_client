import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);
    fetch('http://localhost:3000/coffees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCoffee),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        form.reset();
        Swal.fire({
            title: 'Coffee Added',
            text: 'Your coffee has been added successfully',
            icon: 'success',
            confirmButtonText: 'OK'
})
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };

  return (
    <div className=" min-h-screen py-10 px-4 flex justify-center items-start">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#374151] drop-shadow">
          Add New Coffee
        </h2>
        <p className="text-center text-sm md:text-base text-gray-600 mb-8 max-w-2xl mx-auto">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
        </p>

        <form onSubmit={handleAddCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input required type="text" name="name" placeholder="Enter coffee name" className="p-2 px-3 rounded-md bg-amber-100 text-black font-semibold input-bordered w-full" />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input required type="text" name="chef" placeholder="Enter coffee chef" className="p-2 px-3 rounded-md bg-amber-100 text-black font-semibold  input-bordered w-full" />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input required type="text" name="supplier" placeholder="Enter coffee supplier" className="p-2 px-3 rounded-md bg-amber-100 text-black font-semibold  input-bordered w-full" />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input required type="text" name="taste" placeholder="Enter coffee taste" className="p-2 px-3 rounded-md bg-amber-100 text-black font-semibold  input-bordered w-full" />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input required type="text" name="price" placeholder="Enter coffee Price" className="p-2 px-3 rounded-md bg-amber-100 text-black font-semibold  input-bordered w-full" />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input required type="text" name="details" placeholder="Enter coffee details" className="p-2 px-3 rounded-md bg-amber-100 text-black font-semibold  input-bordered w-full" />
          </div>

          <div className="md:col-span-2">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input required type="text" name="photo" placeholder="Enter photo URL" className="p-2 px-3 rounded-md bg-amber-100 text-black font-semibold input-bordered w-full" />
          </div>

          <div className="md:col-span-2">
            <button type="submit" className="btn w-full bg-[#D2B48C] hover:bg-[#b4936b] text-black text-lg font-medium">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
