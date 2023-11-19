import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Teams() {
    const[data , setData] = useState();
    const initial = async() =>{
        const res = await axios.get('http://localhost:3000/team/');
        setData(res.data);
    }
   

    useEffect(()=>{
         initial();
    },[])
  return (
    <div>Teams</div>
  )
}
