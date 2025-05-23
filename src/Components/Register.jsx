import React, { useContext } from 'react';
import AuthContext from '../Firease/AuthContext';
import Swal from 'sweetalert2';


const RegisterPage = () => {
    const userInfo = useContext(AuthContext)
    const {CreateAccount} = userInfo
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const password = form.password.value;
    
    const userData = {
          name,
          email,
          address
        };
    


     CreateAccount(email, password)
      .then(result => {
        const user = result.user;
        console.log("User created:", user);

        

        // Send to backend
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })
          .then(res => res.json())
          .then(data => {
           if(data.insertedId){
            // form.reset();
            Swal.fire({
              title: 'Account Created',
              text: 'Your account has been created successfully',
              icon: 'success',
              confirmButtonText: 'OK'
            });
           }
          })
          .catch(error => {
            console.error("Error saving user to DB:", error);
          });
      })
      .catch(error => {
        console.error("Account creation error:", error);
        alert("Failed to create account.");
      });
  };

  return (
    <div className="min-h-screen px-3 flex items-center justify-center bg-gradient-to-br from-[#f0ebe3] to-[#e8d6c3]">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-[#331A15] mb-6">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name='name'
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#331A15]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name='address'
              required
              placeholder="Your address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#331A15]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name='email'
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#331A15]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name='password'
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#331A15]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#331A15] text-white py-2 rounded-md hover:bg-[#4a2b1d] transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
