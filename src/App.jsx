import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Register from './pages/Register'
import SignOut from './pages/SignOut.jsx'
import Gadgets from './pages/Gadgets'
import GadgetDetail from './pages/GadgetDetail'
import CreateGadget from './pages/CreateGadget'
import EditGadget from './pages/EditGadget'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };

    fetchUser();
  }, []);

  return (
    <>
      <Nav user={user} />
      <Routes>
        <Route path="/" element={<Home setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/sign-out" element={<SignOut setUser={setUser} />} />
        <Route path="/gadgets" element={<Gadgets />} />
        <Route path="/gadgets/add" element={<CreateGadget />} />
        <Route path="/gadgets/:gadgetId/edit" element={<EditGadget />} />
        <Route path="/gadgets/:gadgetId" element={<GadgetDetail />} />
      </Routes>
    </>
  )
}

export default App
