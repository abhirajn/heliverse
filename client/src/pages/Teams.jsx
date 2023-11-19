import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TeamCard from '../components/TeamCard';
import Modal from '../components/Modal';


export default function Teams() {
    const[data , setData] = useState();
    const [showModal, setShowModal] = useState(false);
    const[showTeam , setShowTeam] = useState();

    const initial = async() =>{
        const res = await axios.get('http://localhost:8000/team/');
        setData(res.data);
    }
   

    useEffect(()=>{
         initial();
    },[])
  return (
    <div className='m-5 '>
    <div className='m-4 flex justify-center text-6xl text-indigo-600 font-mono'>  <p>Teams</p></div> 
    <div className='flex justify-center'>
     {data ?  <div className='grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-4 w-full'>{data.map((d)=>
          <TeamCard  data={d} showModal={showModal} setShowModal={setShowModal} showTeam={showTeam} setShowTeam={setShowTeam} />
      )}</div> : ""}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} showTeam={showTeam} setShowTeam={setShowTeam} />
    </div>
  )
}
