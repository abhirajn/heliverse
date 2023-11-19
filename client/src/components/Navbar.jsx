import React, { useState } from 'react'
// import '../App.css'
import {GiHamburgerMenu} from 'react-icons/gi'
// import Login  from './Login'
// import Signup from './Signup';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
    const [open , setOpen] = useState(false);
    const handleClick = ()=>{
setOpen(!open)
    }
    const navigate = useNavigate();

    // const[login , setLogin] = useState(false);
    // const[sign , setSign] = useState(0);


    const rotate = open ? "rotate(90deg)" : "rotate(0deg)"
  return (
    <div className='navbarr bg-white bg-opacity-40'>
        <div className=''>
        <header className=' h-13   items-center '>
        <div onClick={()=>{navigate('/')}} className='flex float-left'>
            <img src="https://shorturl.at/nUY34" alt='logo' className='h-10 w-10 ml-3 rounded object-cover md:h-16 md:w-16 lg:h-16 lg:w-16'/>
            <h1 className='p-1 py-4 pr-2 font-mono text-lg lg:pr-5 lg:text-xl  md:text-lg'> Heliverse</h1>
            </div>
         <div className='flex justify-end p-2'>
            <nav >
          <ul className='md:flex lg:flex hidden '>
            <li className=''> <button onClick={()=>{navigate('/')}} className='font-mono text-xl rounded-3xl hover:bg-blue-300 px-3 py-2 lg:px-5 md:text-xl md:px-2' >Home</button></li>
            <li className=''> <button onClick={()=>{navigate('/add')}} className='font-mono text-xl rounded-3xl hover:bg-blue-300 px-3 py-2 lg:px-5 md:text-xl md:px-2'>AddUser</button></li>
            <li className=''> <button onClick={()=>{navigate('/teams')}} className='font-mono text-xl rounded-3xl hover:bg-blue-300 px-3 py-2 lg:px-5 md:text-xl md:px-2' >MyTeams</button></li>
            <li className=''> <button onClick={()=>{navigate('/')}} className='font-mono text-xl rounded-3xl hover:bg-blue-300 px-3 py-2 lg:px-5 md:text-xl md:px-2'>CreateTeam</button></li>
          </ul>
      </nav>
      <div className='ml-6 hidden md:block lg:block md:ml-3'>
        <button className='rounded-2xl bg-gray-200 p-2 m-1 font-mono text-xl hover:bg-blue-200 mb-2 md:text-lg ' 
        >Login</button>

       
        <button className='rounded-2xl bg-gray-200 p-2 m-1 font-mono text-xl hover:bg-blue-200  bg-gray-200 p-2 font-mono text-xl hover:bg-blue-200 mx-2 md:text-lg '  onClick={()=>{setSign(2) }}   >Signup</button>
      </div>
      <div className='lg:hidden md:hidden text-right float-right mx-5' onClick={handleClick} style={{  marginRight : "5px"}}>
        <GiHamburgerMenu size="25" style={{transform : rotate}}/>
        </div>
      </div>
      
    
      
        </header>
        </div>
        <div className='lg:hidden md:hidden'>
      <ul className={open ? 'block' : 'hidden'}>
            <li className='px-5 mt-0 w-full'> <button onClick={()=>{navigate('/')}} className='font-mono text-xl border rounded w-full hover:bg-blue-300 hover:text-2xl hover:py-1  '>Home</button></li>
            <li className='px-5 pt-5 w-full'> <button onClick={()=>{navigate('/add')}} className='font-mono text-xl border rounded w-full hover:bg-blue-300 hover:text-2xl  hover:py-1 '>AddUser</button></li>
            <li className='px-5 pt-5 w-full'> <button onClick={()=>{navigate('/teams')}} className='font-mono text-xl border rounded w-full hover:bg-blue-300 hover:text-2xl  hover:py-1'>MyTeams</button></li>
            <li className='px-5 pt-5 w-full'> <button onClick={()=>{navigate('/')}} className='font-mono text-xl border rounded w-full hover:bg-blue-300 hover:text-2xl  hover:py-1'>CreateTeam</button></li>
            <li className='px-5 pt-5 w-full'> <button className='font-mono text-xl border rounded w-full hover:bg-blue-300 hover:text-2xl  hover:py-1'  >Signup</button></li>
            <li className='px-5 pt-5 w-full'> <button className='font-mono text-xl border rounded w-full hover:bg-blue-300 hover:text-2xl  hover:py-1' >Login</button></li>
          </ul>
      </div>
      
    
    </div>
  )
}
