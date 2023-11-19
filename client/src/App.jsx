import { useState } from 'react'
import Home from '../pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Teams from '../pages/Teams.jsx';

function App() {


  return (
    <div className='w-full h-screen'>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/teams'} element={<Teams/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
