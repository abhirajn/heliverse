import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from '../components/Table';
import Filter from '../components/Filter';
import Navbar from '../components/Navbar';
import ViewUser from '../components/ViewUser';
export default function Home() {

 const[data , setData] = useState();
 const[displaydata , setDisplaydata]= useState();
 const[page , setPage] = useState(1);
 const[search , setSearch] = useState('');
 const[gender , setGender] = useState("");
 const[avail , setAvail] = useState(null);
 const[dom , setDom] = useState([]);
 const[filter , setFilter] = useState(false);
 const[selected , setSelected] = useState([]);
 const[team , setTeam] = useState([]);
 const[teamname , setTeamname] = useState('');
 const[showModal , setShowModal] = useState(false);
 const[id , setId] = useState();

//  console.log(team)

 const handleSelected = (Item , mail) => {
  // Check if the item is already in the selectedItems array

    const isSelected = selected.some((item) => item === Item);
    const isthere = team.some((i)=>i === mail);

    if (isSelected) {
      const updatedItems = selected.filter((item) => item !== Item);
      setSelected(updatedItems);
    } else {
      setSelected([...selected, Item]);
    
  }

  if (isSelected) {
    const updatedItems = team.filter((item) => item !== mail);
    setTeam(updatedItems);
  } else {
    setTeam([...team, mail]);
  
}

};

    const init = async() =>{
        const res = await axios.post('https://heliverse-backend-xxxd.onrender.com/api/usersinfo',
        {"gender" : gender,
      "avail" : avail,
    "domain" : dom}
        )
        // console.log(res.data)
         setData(res.data);   
         setDisplaydata(res.data.slice((20*(page-1)),((20*(page-1)+20))));         
    }
    

    const handlePage = async() =>{
         setDisplaydata(data.slice((20*(page-1)),((20*(page-1)+20))))
    }
  
    useEffect(()=>{
        init();
    },[filter , showModal])

 
    const handleTeam = async() =>{
      // console.log("hi")
      if(team.length > 0 && teamname.length > 0){
        const res  = await axios.post('https://heliverse-backend-xxxd.onrender.com/team/create' , {"team" : team , "name" : teamname})
        setTeam([]);
        setSelected([]);
        setTeamname('');
      }else{
        alert("enter team name and tema size should more than 0")
      }
    
    }

  return (

    <div  className='w-full bg-gray-400'>
 
 <ViewUser showModal={showModal} setShowModal={setShowModal} id={id}/>
<div className='my-16' style={{marginLeft : 'auto' , marginRight : 'auto',  width : '70%'}}>

  {displaydata ? <div>
 <div className='flex w-full'>
 <div className="relative w-4/6 m-2">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input value={search} onChange={(e)=>{
             setSearch(e.target.value)          
        }}
         className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by name" />
        {/* <button  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
    </div>
   <div className='w-2/6'>
   <Filter setGender={setGender} setAvail={setAvail} gender={gender} avail={avail} dom={dom} setDom={setDom} setFilter={setFilter} filter={filter}/>
   </div>
 </div>
 <div className='flex m-2'>
  {/* <label for="first_name" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label> */}
            <input type="text" 
            onChange={(e)=>{setTeamname(e.target.value)}}
            id="first_name" className=" w-36 mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter team name" required />
 
            <button  onClick={()=>{handleTeam()}} className="bg-green-400 rounded-2xl px-4 py-2 "
  >Create Team</button>
  </div>
    {/* <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
  
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
               <th scope="col" className="px-6 py-3">
                    Check
                </th>
                <th scope="col" className="px-20 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Gender
                </th>
                <th scope="col" className="px-6 py-3">
                    Domain
                </th>
                <th scope="col" className="px-6 py-3">
                    Available
                </th>
                <th scope="col" className="px-6 py-3">
                    Edit
                </th>
              
            </tr>
        </thead>
        <tbody>
    {displaydata.filter(name => name.first_name.toUpperCase().includes(search.toUpperCase()) || name.last_name.toUpperCase().includes(search.toUpperCase()) ).map((d)=>
      <Table first={d.first_name} last={d.last_name} gender={d.gender} mail={d.email} domain={d.domain} avatar={d.avatar} available={d.available} selected={selected} setSelected={setSelected} handle={handleSelected} team={team} setShowModal={setShowModal}  id={setId} data={d} />
    )}
</tbody>
    </table>
</div>
<ul className="flex items-center -space-x-px h-8 text-sm" onClick={()=>{handlePage()}} >
    <li>
      <p onClick={()=>{
        if(page == 1){
          setPage(1);
        }else{
          setPage(page-1)
        }
       
      }}  
       className="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Previous</span>
        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
      </p>
    </li>
    <li>
      <p onClick={()=>{
        if(page > 3){
          setPage(page-2)
        }else{
          setPage(1);
        }
      }} 
       className=" cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page > 3 ? page-2 : 1 }</p>
    </li>
    <li>
      <p onClick={()=>{
        if(page > 3){
          setPage(page-1)
        }else{
          setPage(2);
        }
      }}
       className=" cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page > 3 ? page-1 : 2}</p>
    </li>
    <li>
    <p onClick={()=>{
        if(page > 3){
          setPage(page)
        }else{
          setPage(3);
        }
      }} 
     className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page > 3 ? page : 3}</p>
    </li>
    <li>
      <p  onClick={()=>{
        if(page == 10){
          setPage(10);
        }else{
          setPage(page+1)
        }
       
      }}   
      className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Next</span>
        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </p>
    </li>
  </ul>
  </div> : <div>loading...</div>}

  
</div>
    </div>
  )
}
