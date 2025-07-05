import './App.css'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Video from './Pages/Video';
import Profile from './Pages/Profile';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App () {

  const[sideNavbar, setSideNavbar] = useState(true);

  const setSideNavbarFunc = (value) => {
    setSideNavbar(value)
  }

  return (
    <div className="App">
    <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar} />
    <Routes>
      <Route path='/' element={<Home sideNavbar={sideNavbar} />} />
      <Route path='/watch/:id' element={<Video  />}></Route>
      <Route path='/user/:id' element={<Profile sideNavbar={sideNavbar} />} ></Route>
    </Routes>
    </div>
  )
}

export default App;