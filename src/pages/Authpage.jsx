// import authpic from "../assets/authpic.jpg"
// import { FaArrowRight } from "react-icons/fa6";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa6";
// const Authpage = () => {
//   const [activeForm, setActiveForm] = useState("register");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [currentPassword, setCurrentPassword] = useState("");
//    const [showPassword, setShowPassword] = useState(false);
//   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const navigate = useNavigate();

//   const switchForm = (form) => setActiveForm(form);

//   const handleDummySubmit = (e) => {
//     e.preventDefault();

//     if (activeForm === "register") {
//       localStorage.setItem("authUser", JSON.stringify({ email, password }));
//       alert("Account registered successfully!");
//       setEmail("");
//       setPassword("");
//       setActiveForm("login");
//     } else if (activeForm === "login") {
//       const savedUser = JSON.parse(localStorage.getItem("authUser"));
//       if (savedUser && savedUser.email === email && savedUser.password === password) {
//         navigate("/dashboard");
//       } else {
//         alert("Invalid email or password");
//       }
//     } else if (activeForm === "forgot") {
//       alert("Password reset link sent to your email.");
//       setEmail("");
//     } else if (activeForm === "change") {
//       const savedUser = JSON.parse(localStorage.getItem("authUser"));
//       if (savedUser && savedUser.password === currentPassword) {
//         const updatedUser = { ...savedUser, password: newPassword };
//         localStorage.setItem("authUser", JSON.stringify(updatedUser));
//         alert("Password changed successfully.");
//         setCurrentPassword("");
//         setNewPassword("");
//         setActiveForm("login");
//       } else {
//         alert("Current password is incorrect.");
//       }
//     } else {
//       alert("Form submitted");
//     }
//   };

//   const renderPasswordInput = (value, setValue, show, setShow, placeholder) => (
//     <div className="relative">
//       <input
//         type={show ? "text" : "password"}
//         placeholder={placeholder}
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         className="w-full p-2 pl-4 pr-10 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400"
//         required
//       />
//       <span
//         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 cursor-pointer"
//         onClick={() => setShow(!show)}
//       >
//         {show ? <FaEyeSlash /> : <FaEye />}
//       </span>
//     </div>
//   );

//   const renderForm = () => {
//     switch (activeForm) {
//       case "login":
//         return (
//           <form onSubmit={handleDummySubmit} className="space-y-4">
//             <p className="text-sm mb-5"><span className="text-zinc-400 ">Do you want to</span>  <span className="underline cursor-pointer text-third" onClick={() => switchForm("change")}>change your password?</span> </p>
//             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 pl-4 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400" required />
//             {renderPasswordInput(password, setPassword, showPassword, setShowPassword, "Password")}
//             <a href="#" className="text-sm text-zinc-400 hover:underline " onClick={() => switchForm("forgot")}>Forgot password?</a>
//             <button type="submit" className="w-full bg-violet-500 text-white xl:mt-15 lg:mt-15 md:mt-4 p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-violet-600">Login</button>
//             <div className="text-sm flex justify-center gap-2 items-center">
//               <div className="border-t border-zinc-400 w-4/12"/> 
//               <h4 className="text-zinc-400">or log in with</h4>
//               <div className="border-t border-zinc-400 w-4/12"/> 
//             </div>
//             <div className="flex gap-2 mt-4">
//               <button type="submit" className="w-full flex justify-center items-center gap-2 bg-transparent text-zinc-400 border border-zinc-400 p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-white/5">
//               <span className="text-2xl"><FcGoogle/></span> Google</button>
//               <button type="submit" className="w-full flex justify-center items-center gap-2 bg-transparent text-zinc-400 border border-zinc-400 p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-white/5">
//              <span className="text-2xl"><FaApple/></span> Apple</button>
//             </div>
//           </form>
//         );
//       case "register":
//         return (
//           <form onSubmit={handleDummySubmit} className="space-y-4">
//             <p className="text-sm mb-5"><span className="text-zinc-400 ">Already have an account?</span>  <span className="underline cursor-pointer text-third" onClick={() => switchForm("login")}>log in</span> </p>
//             <div className="flex gap-4">
//               <input type="text" placeholder="First Name" className="w-full p-2 pl-4 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400" required />
//               <input type="text" placeholder="Last Name" className="w-full p-2 pl-4 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400" required />
//             </div>
//             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 pl-4 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400" required />
//             {renderPasswordInput(password, setPassword, showPassword, setShowPassword, "Password")}
//             <button type="submit" className="w-full bg-violet-500 text-white xl:mt-10 lg:mt-10 md:mt-2 p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-violet-600">Create account</button>
//             <div className="text-sm flex justify-center gap-2 items-center">
//               <div className="border-t border-zinc-400 w-4/12"/> 
//               <h4 className="text-zinc-400">or register with</h4>
//               <div className="border-t border-zinc-400 w-4/12"/> 
//             </div>  
//             <div className="flex gap-2 mt-4">
//               <button type="submit" className="w-full flex justify-center items-center gap-2 bg-transparent text-zinc-400 border border-zinc-400 p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-white/5">
//               <span className="text-2xl"><FcGoogle/></span> Google</button>
//               <button type="submit" className="w-full flex justify-center items-center gap-2 bg-transparent text-zinc-400 border border-zinc-400 p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-white/5">
//              <span className="text-2xl"><FaApple/></span> Apple</button>
//             </div>
//           </form>
//         );
//       case "forgot":
//         return (
//           <form onSubmit={handleDummySubmit} className="space-y-4 mb-60">
//             <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 pl-4 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400" required />
//             <button type="submit" className="w-full bg-violet-500 text-white p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-violet-600">Reset Password</button>
//           </form>
//         );
//       case "change":
//         return (
//           <form onSubmit={handleDummySubmit} className="space-y-4 mb-52">
//             {renderPasswordInput(currentPassword, setCurrentPassword, showCurrentPassword, setShowCurrentPassword, "Current Password")}
//             {renderPasswordInput(newPassword, setNewPassword, showNewPassword, setShowNewPassword, "New Password")}
//             <button type="submit" className="w-full bg-violet-500 text-white p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-violet-600">Change Password</button>
//           </form>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center bg-primary px-4 h-screen">
//       <div className="bg-secondary p-4 rounded-3xl shadow-2xl shadow-zinc-800 xl:w-[70%] lg:w-[90%] md:w-[99%] sm:w-[90%] grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xl:items-center lg:items-center md:items-center sm:items-start gap-4 ">
//         <div className="w-full relative"> 
//             <img src={authpic} alt="Logo" className="w-full xl:h-full lg:h-full md:h-full sm:h-[40vh] rounded-3xl" />
//             <h1 className="absolute top-2 left-4 text-3xl font-bold font-sans text-white">SAW</h1>
//             <Link to={"/home"}>
//               <button className="absolute flex items-center gap-2 cursor-pointer hover:bg-white/30 transition-all duration-300 text-sm font-sans top-4 right-4 bg-white/20 backdrop-blur-none text-white px-3 py-1 rounded-full">Back to dashboard <FaArrowRight/></button>
//             </Link> 
//             <div className="absolute bottom-10 text-2xl xl:left-36 lg:left-24 md:left-14 sm:left-36 text-white text-center font-roboto font-extralight">
//               <h3>Capturing Moments, <br /> Creating Memories</h3>
//             </div>
//         </div>

//         <div className="xl:p-10 lg:p-4 h-[70%] flex flex-col justify-between">
//           <div className="flex justify-between items-center mb-5">
//             <h1 className="text-white xl:text-4xl lg:text-3xl md:text-2xl sm:text-3xl font-roboto ">
//               {activeForm === "login" ? "Login" : "Create account" | activeForm === "register" ? "Create an account" : activeForm === "forgot" ? "Forgot Password" : "Change Password"}
//             </h1>
//             {   
//               activeForm === "login" || activeForm === "register" ? (
//                 <div className="flex bg-primary p-1 rounded-full">
//                     <button onClick={() => switchForm("login")} className={`text-gray-300 text-sm p-2 rounded-full hover:opacity-70 transition-all duration-100 cursor-pointer ${activeForm === "login" ? "bg-secondary" : ""}`}>Login</button>
//                     <button onClick={() => switchForm("register")} className={`text-gray-300 text-sm p-2 rounded-full hover:opacity-70 transition-all duration-100 cursor-pointer ${activeForm === "register" ? "bg-secondary" : ""}`}>Register</button>
//                   </div>
//               ) : activeForm === "forgot" || activeForm === "change" ? (
//                 <button onClick={() => switchForm("login")} className="p-3 rounded-full bg-white/5 text-white hover:bg-white/10 cursor-pointer transition-all duration-300">
//                   <FaArrowLeft/>
//                 </button>
//               ) : null
//             }
//           </div>
//           {renderForm()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Authpage;



import authpic from "../assets/authpic.jpg"
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { loginUser, registerUser } from "../api/auth"; 
import { decodeJWT } from "../utils/jwt"; 

const Authpage = () => {
  const [activeForm, setActiveForm] = useState("register");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const switchForm = (form) => setActiveForm(form);

  const handleDummySubmit = async (e) => {
    e.preventDefault();

    if (activeForm === "register") {
      try {
      const _res = await registerUser(username, email, password);
      alert("Account registered successfully!");
      setEmail("");
      setPassword("");
      setUsername("");
      setActiveForm("login");
    } catch (error) {
      alert(error.message || "Registration failed");  
    }
    } else if (activeForm === "login") {
       try {
            const data = await loginUser(username, password);
            localStorage.setItem("token", data.token);

            localStorage.setItem("username", username);
            
            localStorage.setItem("email", email);
            

            const user = decodeJWT(data.token);
            console.log("User data:", user);
            navigate("/home", { state: { user } });
          } catch (error) {
            alert(error.message || "Login failed");
          }
    } else if (activeForm === "forgot") {
      alert("Password reset link sent to your email.");
      setEmail("");
    } else if (activeForm === "change") {
      const savedUser = JSON.parse(localStorage.getItem("authUser"));
      if (savedUser && savedUser.password === currentPassword) {
        const updatedUser = { ...savedUser, password: newPassword };
        localStorage.setItem("authUser", JSON.stringify(updatedUser));
        alert("Password changed successfully.");
        setCurrentPassword("");
        setNewPassword("");
        setActiveForm("login");
      } else {
        alert("Current password is incorrect.");
      }
    } else {
      alert("Form submitted");
    }
  };

  const renderPasswordInput = (value, setValue, show, setShow, placeholder) => (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-2 pl-4 pr-10 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400"
        required
      />
      <span
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        {show ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
  );

  const renderForm = () => {
    switch (activeForm) {
      case "login":
        return (
          <form onSubmit={handleDummySubmit} className="space-y-4">
            <p className="text-sm mb-5"><span className="text-zinc-400 ">Do you want to</span>  <span className="underline cursor-pointer text-third" onClick={() => switchForm("change")}>change your password?</span> </p>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 pl-4 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400"
                required
              />
            {renderPasswordInput(password, setPassword, showPassword, setShowPassword, "Password")}
            <a href="#" className="text-sm text-zinc-400 hover:underline " onClick={() => switchForm("forgot")}>Forgot password?</a>
            <button type="submit" className="w-full bg-violet-500 text-white xl:mt-15 lg:mt-15 md:mt-4 p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-violet-600">Login</button>
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
              <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 pl-4 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400"
                  required
                />
                </div>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 pl-4 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400" required />
            {renderPasswordInput(password, setPassword, showPassword, setShowPassword, "Password")}
            <button type="submit" className="w-full bg-violet-500 text-white xl:mt-10 lg:mt-10 md:mt-2 p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-violet-600">Create account</button>
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
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 pl-4 bg-white/5 hover:bg-white/10 rounded focus:outline focus:outline-[#6D54B5] transition-all duration-300 text-zinc-400" required />
            <button type="submit" className="w-full bg-violet-500 text-white p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-violet-600">Reset Password</button>
          </form>
        );
      case "change":
        return (
          <form onSubmit={handleDummySubmit} className="space-y-4 mb-52">
            {renderPasswordInput(currentPassword, setCurrentPassword, showCurrentPassword, setShowCurrentPassword, "Current Password")}
            {renderPasswordInput(newPassword, setNewPassword, showNewPassword, setShowNewPassword, "New Password")}
            <button type="submit" className="w-full bg-violet-500 text-white p-2 rounded font-roboto cursor-pointer transition-all duration-200 hover:bg-violet-600">Change Password</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-primary px-4 h-screen">
      <div className="bg-secondary p-4 rounded-3xl shadow-2xl shadow-zinc-800 xl:w-[70%] lg:w-[90%] md:w-[99%] sm:w-[90%] grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xl:items-center lg:items-center md:items-center sm:items-start gap-4 ">
        <div className="w-full relative"> 
            <img src={authpic} alt="Logo" className="w-full xl:h-full lg:h-full md:h-full sm:h-[40vh] rounded-3xl" />
            <h1 className="absolute top-2 left-4 text-3xl font-bold font-sans text-white">SAW</h1>
            <Link to={"/home"}>
              <button className="absolute flex items-center gap-2 cursor-pointer hover:bg-white/30 transition-all duration-300 text-sm font-sans top-4 right-4 bg-white/20 backdrop-blur-none text-white px-3 py-1 rounded-full">Back to dashboard <FaArrowRight/></button>
            </Link> 
            <div className="absolute bottom-10 text-2xl xl:left-36 lg:left-24 md:left-14 sm:left-36 text-white text-center font-roboto font-extralight">
              <h3>Capturing Moments, <br /> Creating Memories</h3>
            </div>
        </div>

        <div className="xl:p-10 lg:p-4 h-[70%] flex flex-col justify-between">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-white xl:text-4xl lg:text-3xl md:text-2xl sm:text-3xl font-roboto ">
              {activeForm === "login" ? "Login" : activeForm === "register" ? "Create an account" : activeForm === "forgot" ? "Forgot Password" : "Change Password"}
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
