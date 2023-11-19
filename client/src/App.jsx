import { useState } from 'react'
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Teams from './pages/Teams.jsx';
import AddUser from './pages/AddUser.jsx';
import Navbar from './components/Navbar.jsx';

function App() {


  return (
    <div className='w-full h-screen'>
      <Router>
      <Navbar/>
        <Routes>
          
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/teams'} element={<Teams/>}/>
          <Route path={'/add'} element={<AddUser/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
