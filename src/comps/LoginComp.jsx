import React from 'react'

const LoginComp = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-semibold text-black mb-6">Login</h1>

      <div className="bg-white p-8 w-full max-w-md border border-gray-300">
        <form className="space-y-4">
          <div>
            <label htmlFor="mail" className="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" name="mail" id="mail" className="mt-1 block w-full border border-gray-300 p-2 focus:outline" placeholder="Email" />
          </div>
          
          <div>
            <label htmlFor="pass" className="block text-sm font-medium text-gray-700">Password:</label>
            <input type="password" name="pass" id="pass" className="mt-1 block w-full border border-gray-300 p-2 focus:outline" placeholder="Password" />
          </div>

          <button type="submit" className="w-full bg-black text-white font-semibold py-2 hover:bg-red-700 transition duration-100" >Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginComp