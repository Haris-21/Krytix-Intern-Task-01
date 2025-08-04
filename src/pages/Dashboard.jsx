import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard 🎉</h1>
        <p className="text-gray-600 mb-4">You’ve successfully logged in or registered.</p>
        <Link to="/" className="text-blue-500 underline">Back to Auth</Link>
      </div>    
    </div>
  );
};

export default Dashboard;
