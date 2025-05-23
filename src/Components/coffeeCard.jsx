import React from "react";
import Swal from "sweetalert2";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, price, photo } = coffee;
  const handleDelete = (id) => {
    // Handle delete action here
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:3000/coffees/${id}`, {
            method: "DELETE",
            })
            .then((res) => res.json())
            .then((data) => {
            console.log(data);
            })
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
            });
        }
        });

        console.log(id);
  };


  return (
    <div className="flex w-full items-center justify-between bg-[#fdfdfd]  p-4 rounded-md shadow-sm max-w-3xl mx-auto">
      {/* Coffee Image */}
      <div className=" flex-shrink-0">
        <img src={photo} alt={name} className="w-28 h-36 object-cover rounded" />
      </div>

      {/* Coffee Info */}
      <div className="flex-grow px-6">
        <p className="text-base text-gray-700 mb-1">
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="text-base text-gray-700 mb-1">
          <span className="font-semibold">Chef:</span> {chef}
        </p>
        <p className="text-base text-gray-700">
          <span className="font-semibold">Price:</span> {price} Taka
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col space-y-2">
        <Link to={`/coffeedetails/${_id}`} className="bg-amber-300 p-2 rounded hover:bg-amber-400">
          <FaEye className="text-white" />
        </Link>
        <Link to={`/upgradecoffee/${_id}`} className="bg-gray-700 p-2 rounded hover:bg-gray-800">
          <FaPen className="text-white" />
        </Link>
        <button onClick={() => handleDelete(_id)} className="bg-red-500 p-2 rounded hover:bg-red-600">
          <FaTrash className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
