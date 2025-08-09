import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Header = () => { 

    const navigate = useNavigate();

    const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email"); 
    navigate("/"); // Back to login page
  };









    return (
        <header className="bg-primary p-4 w-full flex items-center justify-between">
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