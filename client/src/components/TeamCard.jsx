import React from 'react'
import Modal from './Modal';

export default function TeamCard({data ,showModal , setShowModal, showTeam, setShowTeam}) {
    // console.log(data.members[0].avatar)
    
  return (
    <div 
    onClick={()=>{setShowModal(true)}}
    className='cursor-pointer'>
       

<div 
onClick={()=>{setShowTeam(data)}}
className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This team has {data.members.length} members.</p>
   {data.members.length >= 3 ? <div> <div className='flex'>
    <img className="w-10 h-10 m-1 rounded-full border border-white" src={data.members[0].avatar} alt="Jese image"/>
    <img className="w-10 h-10 m-1 rounded-full border border-white" src={data.members[1].avatar} alt="Jese image"/>
    <img className="w-10 h-10 mt-1 ml-1 mb-1 mr-0 pr-0 rounded-full border border-white" src={data.members[2].avatar} alt="Jese image"/>
    <p className='text-gray-500 pt-2 text-4xl'>.....</p>
    </div></div> : ''}
    <a className="inline-flex items-center px-3 mt-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Know more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>

    </div>
  )
}
