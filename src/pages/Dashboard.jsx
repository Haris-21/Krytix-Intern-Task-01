import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

import React from "react";
const Dashboard = () => {
  return (
    <div className="flex items-center bg-primary w-full h-screen p-4 gap-4">
      <div className="bg-secondary h-full p-8 rounded-2xl shadow text-center w-[25%]">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">SAW</h1>
          <button className="text-white p-2 rounded hover:bg-white/10"><FaArrowLeft /></button>

        </div>
        <ul className="flex flex-col items-start text-lg font-semibold w-full">
          <Link to="/profile" className="text-zinc-400 hover:bg-white/10 p-2 pl-4 hover:text-white transition-all duration-200 rounded-xl w-full text-start">Home</Link>
          <Link to="/profile" className="text-zinc-400 hover:bg-white/10 p-2 pl-4 hover:text-white transition-all duration-200 rounded-xl w-full text-start">Analytics</Link>
          <Link to="/profile" className="text-zinc-400 hover:bg-white/10 p-2 pl-4 hover:text-white transition-all duration-200 rounded-xl w-full text-start">Progress</Link>
          <Link to="/settings" className="text-zinc-400 hover:bg-white/10 p-2 pl-4 hover:text-white transition-all duration-200 rounded-xl w-full text-start">About</Link>
          <Link to="/help" className="text-zinc-400 hover:bg-white/10 p-2 pl-4 hover:text-white transition-all duration-200 rounded-xl w-full text-start">Help</Link>
        </ul>
      </div>
      <div className="flex flex-col items-center w-[75%] h-full rounded-2xl shadow"> 
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-lg w-full flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">SAW</h1>
          <div className="flex items-center gap-4">
          <span className="text-zinc-700 text-3xl"><FaUserCircle/></span>
          <Link to='/auth'>
            <button className="bg-violet-500 text-white px-4 py-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-violet-600">Log In</button>
          </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Welcome to the Dashboard</h2>
          <p className="text-zinc-400 text-lg">Here you can manage your account and view your progress.</p>
        </div>
      </div>    
    </div>
  );
};

export default Dashboard;
