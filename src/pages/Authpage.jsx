import authpic from "../assets/authpic.jpg"
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


const Authpage = () => {
  const [activeForm, setActiveForm] = useState("login");
  const navigate = useNavigate();

  const switchForm = (form) => setActiveForm(form);

  const handleDummySubmit = (e) => {
    e.preventDefault();
    if (activeForm === "login" || activeForm === "register") {
      navigate("/dashboard");
    } else {
      alert("Form submitted");
    }
  };

  const renderForm = () => {
    switch (activeForm) {
      case "login":
        return (
          <form onSubmit={handleDummySubmit} className="space-y-4">
             <p className="text-sm mb-5"><span className="text-zinc-400 ">Do you want to</span>  <span className="underline cursor-pointer text-third" onClick={() => switchForm("change")}>change your password?</span> </p>
            <input type="email" placeholder="Email" className="w-full p-2 pl-4 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400" required />
            <input type="password" placeholder="Password" className="w-full p-2 pl-4 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400 " required />
            <a href="#" className="text-sm text-zinc-400 hover:underline " onClick={() => switchForm("forgot")}>Forgot password?</a>
            <button type="submit" className="w-full bg-violet-500 text-white mt-15 p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-violet-600">Login</button>
            <div className="text-sm flex justify-center gap-2 items-center">
              <div className="border-t border-zinc-400 w-4/12"/> 
              <h4 className="text-zinc-400">or log in with</h4>
              <div className="border-t border-zinc-400 w-4/12"/> 
            </div>
            <div className="flex gap-2 mt-4">
              <button type="submit" className="w-full flex justify-center items-center gap-2 bg-transparent text-zinc-400 border border-zinc-400 p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-white/5">
              <span className="text-2xl"><FcGoogle/></span> Google</button>
              <button type="submit" className="w-full flex justify-center items-center gap-2 bg-transparent text-zinc-400 border border-zinc-400 p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-white/5">
             <span className="text-2xl"><FaApple/></span> Apple</button>

            </div>
          </form>
        );
      case "register":
        return (
          <form onSubmit={handleDummySubmit} className="space-y-4">
             <p className="text-sm mb-5"><span className="text-zinc-400 ">Already have an account?</span>  <span className="underline cursor-pointer text-third" onClick={() => switchForm("login")}>log in</span> </p>
             <div className="flex gap-4">
                <input type="text" placeholder="First Name" className="w-full p-2 pl-4 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400" required />
                <input type="text" placeholder="Last Name" className="w-full p-2 pl-4 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400" required />

             </div>
            <input type="email" placeholder="Email" className="w-full p-2 pl-4 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400" required />
            <input type="password" placeholder="Password" className="w-full p-2 pl-4 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400" required />
            <button type="submit" className="w-full bg-violet-500 text-white mt-10 p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-violet-600">Create account</button>
            <div className="text-sm flex justify-center gap-2 items-center">
              <div className="border-t border-zinc-400 w-4/12"/> 
              <h4 className="text-zinc-400">or register with</h4>
              <div className="border-t border-zinc-400 w-4/12"/> 
            </div>  
            <div className="flex gap-2 mt-4">
              <button type="submit" className="w-full flex justify-center items-center gap-2 bg-transparent text-zinc-400 border border-zinc-400 p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-white/5">
              <span className="text-2xl"><FcGoogle/></span> Google</button>
              <button type="submit" className="w-full flex justify-center items-center gap-2 bg-transparent text-zinc-400 border border-zinc-400 p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-white/5">
             <span className="text-2xl"><FaApple/></span> Apple</button>

            </div>
          </form>
        );
      case "forgot":
        return (
          <form onSubmit={handleDummySubmit} className="space-y-4 mb-60">
            <input type="email" placeholder="Enter your email" className="w-full p-2 pl-4 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400" required />
            <button type="submit" className="w-full bg-violet-500 text-white p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-violet-600">Reset Password</button>
          </form>
        );
      case "change":
        return (
          <form onSubmit={handleDummySubmit} className="space-y-4 mb-52">
            <input type="password" placeholder="Current Password" className="w-full p-2 pl-4 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400" required />
            <input type="password" placeholder="New Password" className="w-full p-2 pl-4 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400" required />
            <button type="submit" className="w-full bg-violet-500 text-white p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-violet-600">Change Password</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-primary px-4 h-screen">
      <div className="bg-secondary p-4 rounded-3xl shadow-2xl shadow-zinc-800 w-[70%] grid grid-cols-2 items-center gap-4 ">
        <div className="w-full relative "> 
            <img src={authpic} alt="Logo" className="w-full h-full rounded-3xl" />
            <h1 className="absolute top-2 left-4 text-3xl font-bold font-sans text-white">SAW</h1>
            <Link to={"/dashboard"}>
              <button className="absolute flex items-center gap-2 cursor-pointer hover:bg-white/30 transition-all duration-300 text-sm font-sans top-4 right-4 bg-white/20 backdrop-blur-none text-white px-3 py-1 rounded-full">Back to dashboard <FaArrowRight/></button>
            </Link>
            <div className="absolute bottom-10 text-2xl left-36 text-white text-center font-roboto font-extralight">
              <h3>Capturing Moments, <br /> Creating Memories</h3>
            </div>
        </div>

            <div className="p-10 h-[70%] flex flex-col justify-between">
              <div className="flex justify-between items-center mb-5">
                <h1 className="text-white text-4xl font-roboto text-center">
                  {/* {activeForm.replace("-", " ")} */}
                  {activeForm === "login" ? "Login" : "Create account" | activeForm === "register" ? "Create an account" : activeForm === "forgot" ? "Forgot Password" : "Change Password"}
                  </h1>
                  {
                    activeForm === "login" || activeForm === "register" ? (

                      <div className="flex bg-primary p-1 rounded-full">
                          <button onClick={() => switchForm("login")} className={`text-gray-300 text-sm p-2 rounded-full hover:opacity-70 transition-all duration-100 cursor-pointer ${activeForm === "login" ? "bg-secondary" : ""}`}>Login</button>
                          <button onClick={() => switchForm("register")} className={`text-gray-300 text-sm p-2 rounded-full hover:opacity-70 transition-all duration-100 cursor-pointer ${activeForm === "register" ? "bg-secondary" : ""}`}>Register</button>
                        </div>

                    ) : activeForm === "forgot" || activeForm === "change" ? (
                      <button onClick={() => switchForm("login")} className="p-3 rounded-full bg-white/5 text-white hover:bg-white/10 cursor-pointer transition-all duration-300">
                        <FaArrowLeft/>
                      </button>
                    ) : null
                  }
               
              </div>

              

                {renderForm()}

            </div>
      </div>
    </div>
  );
};

export default Authpage;
