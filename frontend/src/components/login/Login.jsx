import React, { useState } from 'react';
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const data = {
        username,
        password
      }
      // console.log(data);
      const response = await axios.post(`http://localhost:8000/api/v1/admins/login`,data)
      console.log(response.data);
      localStorage.setItem(response.data.accessToken)
      navigate('/dashboard')
      if(!response.status === 200){
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      console.error('Login failed', error.response.data.message); // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
      <h2 className="text-3xl mb-6 text-center text-gray-700 font-bold">Logo</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="text-center">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          // onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;