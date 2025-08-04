// import { useState } from 'react'
// import './App.css'
import Authpage from './pages/Authpage'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
  

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Authpage/>} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
