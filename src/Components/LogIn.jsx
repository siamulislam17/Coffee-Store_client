import React, { use } from 'react';
import AuthContext from '../Firease/AuthContext';

const LoginPage = () => {
  const UserInfo = use(AuthContext);
  const { signIn } = UserInfo;
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email,password)
    .then(result => console.log(result.user))
    .catch(error => console.log(error))
    
  };

  return (
    <div className="min-h-screen px-3 flex items-center justify-center bg-gradient-to-br from-[#f0ebe3] to-[#e8d6c3]">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-[#331A15] mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
