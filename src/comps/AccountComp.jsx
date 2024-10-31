import React from 'react';

const AccountComp = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-[2em] font-semibold text-black mb-6">Account</h1>

      <div className="bg-white p-[4vw] w-full max-w-md border border-gray-300">
        <form className="space-y-4 flex flex-col items-center">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label><br />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label><br />
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label><br />
          </div>

          <button type="submit" className="px-[2em] bg-black text-white font-semibold py-2 hover:bg-red-700" >Log Out</button>
        </form>
      </div>
    </div>
  );
};

export default AccountComp;