import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="bg-primary h-screen p-4">
      <div className="bg-secondary h-full xl:p-8 lg:p-8 md:p-4 sm:p-4 rounded-2xl shadow text-center w-full">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">SAW</h1>
          <button className="text-white p-2 rounded hover:bg-white/10"><FaArrowLeft /></button>

        </div>
        <ul className="flex flex-col items-start text-lg font-semibold w-full">
          <Link to="/home" className="text-zinc-400 hover:bg-white/10 p-2 pl-4 hover:text-white transition-all duration-200 rounded-xl w-full text-start">Home</Link>
          <Link to="/analytics" className="text-zinc-400 hover:bg-white/10 p-2 pl-4 hover:text-white transition-all duration-200 rounded-xl w-full text-start">Analytics</Link>
          <Link to="/profile" className="text-zinc-400 hover:bg-white/10 p-2 pl-4 hover:text-white transition-all duration-200 rounded-xl w-full text-start">Progress</Link>
          <Link to="/settings" className="text-zinc-400 hover:bg-white/10 p-2 pl-4 hover:text-white transition-all duration-200 rounded-xl w-full text-start">About</Link>
          <Link to="/help" className="text-zinc-400 hover:bg-white/10 p-2 pl-4 hover:text-white transition-all duration-200 rounded-xl w-full text-start">Help</Link>
        </ul>
      </div>
      
    </aside>
  );
};

export default SideBar;
