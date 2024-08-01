import React, { useState } from 'react'
<link href=".././tailwind.css" rel="stylesheet"></link>

function Form() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Add your login logic here, e.g., axios call
      try {
        // Simulating login logic
        console.log('Logged in with:', { username, password });
      } catch (error) {
        console.error('Login failed', error); // Handle error
      }
    };

    return (
        <>
        <div className="w-full mt-11 flex justify-center align-middle items-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
            <h2 className="text-3xl mb-6 text-center text-gray-700 font-bold">Logo</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Bookie Name
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
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Email
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
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Bookie Code
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="code"
                type="text"
                placeholder="Code"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                />
            </div>
            <div className="text-center">
                <button
                className="bg-custom-gradient text-white w-96 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={handleSubmit}
                >
                Submit
                </button>
            </div>
            </form>
        </div>

        </>
    )
}

export default Form