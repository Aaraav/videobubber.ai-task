import React from 'react';

export default function Navbar() {
  return (
    <>
    <nav className="w-full h-16  text-Black flex justify-between items-center px-4 lg:px-8">
      <div className="flex items-center lg:w-1/2">
  <span className="text-black text-2xl font-bold">P</span>
     <div className="lg:flex ml-24 lg:w-1/2 lg:justify-end hidden">
        <input
          type="search"
          placeholder="Search"
          className="w-48 h-8 bg-gray-100 text-black pl-4 rounded-xl border-none"
        />
      </div>
      <ul className="flex ml-[40%] items-center space-x-4 lg:w-1/2 lg:justify-end text-xl">
        <li>
          <a href="#" className="hover:text-gray-300">Launches</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">Products</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">News</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">Community</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">Advertise</a>
        </li>
      </ul>
      <div className="flex items-center lg:hidden">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Menu
        </button>
      </div>
      
        <button className="bg-orange-500 ml-[55%] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
        <div className="w-[50px] h-[50px] rounded-full bg-slate-800"></div>
      </div>
    </nav>
    <div className="w-full h-12  text-white bg-green-500 flex justify-center items-center px-4 lg:px-8">
<h2>Hey there!, Please complete your onboarding.</h2>
    </div>
    </>
  );
}