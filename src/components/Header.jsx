import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Adify.cloud</h1>
      <nav>
        <a href="#" className="text-lg hover:text-blue-500">Features</a>
        <a href="#" className="text-lg hover:text-blue-500 ml-4">Pricing</a>
        <a href="#" className="text-lg hover:text-blue-500 ml-4">Contact</a>
      </nav>
      <div>
        <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
          Login
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
