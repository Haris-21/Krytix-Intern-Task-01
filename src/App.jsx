// import { useState } from 'react'
// import './App.css'
import Layout from './Layout/Layout';
import Authpage from './pages/Authpage'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Analytics from './pages/Analytics';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
  

    <BrowserRouter>
        <Routes>
        {/* Authpage – does NOT use layout */}
       <Route path="/" element={<Navigate to="/auth" />} />

        {/* Public Auth Page */}
        <Route path="/auth" element={<Authpage />} />

        {/* Dashboard layout with nested routes */}
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="analytics" element={<Analytics />} />
          {/* You can add more nested routes here like /settings, etc. */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
