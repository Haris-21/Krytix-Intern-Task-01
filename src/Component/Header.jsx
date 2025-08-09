import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Header = () => { 

    const navigate = useNavigate();

    const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email"); 
    navigate("/"); 
  };


    return (
        <header className="bg-primary pr-4 pb-4 pt-4 xs:pl-4 2xs:pl-4 3xs:pl-4 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-0 w-full flex items-center justify-between">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-lg w-full flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-white">SAW</h1>
                        <div className="flex items-center gap-4">
                        <span className="text-zinc-700 text-3xl"><FaUserCircle/></span>
                        <Link to='/'>
                            <button onClick={handleLogout} className="bg-violet-500 text-white px-4 py-2 font-semibold rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-violet-600">Log Out</button>
                        </Link>
                        </div>
            </div>
        </header>
    );
}

export default Header;