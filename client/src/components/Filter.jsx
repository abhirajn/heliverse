import React, { useState } from 'react'
import './style.css'
export default function Filter({ setGender, setAvail , gender ,  avail ,  dom , setDom , setFilter , filter}) {

  const domain = [
    { id: 1, label: 'IT' },
    { id: 2, label: 'Sales' },
    { id: 3, label: 'Marketing' },
    { id: 4, label: 'Finance' },
    { id: 5, label: 'Management' },
    { id: 6, label: 'UI Designing' },
    { id: 7, label: 'Business development' },
  ];

  const tdomain = [
    'IT',
    'Sales',
    'Marketing',
    'Finance',
    'Management',
    'UI Designing',
    'Business Development',
  ];

  
  const handleDomain = (Item) => {
    // Check if the item is already in the selectedItems array
 
      const isSelected = dom.some((item) => item === Item);

      if (isSelected) {
        // If already selected, remove it
        const updatedItems = dom.filter((item) => item !== Item);
        setDom(updatedItems);
      } else {
        // If not selected, add it
        const selectedItem = tdomain.find((item) => item === Item);
        setDom([...dom, selectedItem]);
      
    }
  
  };


  // const[check , setCheck]  = useState(false)
  return (
    <div className='w-full z-1'>
      <div className="dropdown inline-block relative">
        <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-9 rounded inline-flex items-center">
          <span>Filter</span>
        </button>
        <ul className="dropdown-content absolute hidden text-gray-700 pt-1">
          <li className="dropdown">
            <p className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Gender </p>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-5 ml-24 -mt-10">
            <li><p className="bg-gray-200 hover:bg-gray-400 py-2 px-4 w-28 block whitespace-no-wrap"><label><input type='checkbox' checked={(gender === '')} onClick={()=>{setGender("")}}></input> None</label></p></li>
              <li><p className="bg-gray-200 hover:bg-gray-400 py-2 px-4 w-28 block whitespace-no-wrap"><label><input type='checkbox' checked={(gender === 'Male')} onClick={()=>{setGender("Male")}}></input> Male</label></p></li>
              <li><p className="bg-gray-200 hover:bg-gray-400 py-2 px-4 w-28 block whitespace-no-wrap"><label><input type='checkbox'checked={(gender === 'Female')} onClick={()=>{setGender("Female")}}></input> Female</label></p></li>
            </ul>
          </li>

          <li className="dropdown">
            <p className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Availability </p>

            <ul className="dropdown-content absolute hidden text-gray-700 pl-5 ml-24 -mt-10">
            <li><p className="bg-gray-200 hover:bg-gray-400 py-2 px-4 w-28 block whitespace-no-wrap"><label><input type='checkbox' checked={(avail === null)} onClick={()=>{setAvail(null)}}></input> None</label></p></li>
              <li><p className="bg-gray-200 hover:bg-gray-400 py-2 px-4 w-28 block whitespace-no-wrap"><label><input type='checkbox' checked={(avail === true)} onClick={()=>{setAvail(true)}}></input> True</label></p></li>
              <li><p className="bg-gray-200 hover:bg-gray-400 py-2 px-4 w-28 block whitespace-no-wrap"><label><input type='checkbox'checked={(avail === false)} onClick={()=>{setAvail(false)}}></input> False</label></p></li>
            </ul>
          </li>

          <li className="dropdown">
            <p className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Domain </p>
            <ul className="dropdown-content absolute hidden text-gray-700 pl-5 ml-24 -mt-10">
              {tdomain.map((d)=>
              <li><p className="bg-gray-200 hover:bg-gray-400 py-2 px-4 w-36 block whitespace-no-wrap"><label><input type='checkbox' 
              checked={dom.some((e) => e  === d)}
                onChange={() => handleDomain(d)} 
              ></input> {d}</label></p></li>
              )}
            </ul>
          </li>

          <li className="dropdown">
      <div className='flex '>
      <p className="w-2/4 bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap m-1" >cancel</p>
      <p className="w-2/4 bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap my-1 mr-1" onClick={()=>{setFilter(!filter)}} >apply</p>
      </div>
          </li>

        </ul>
      </div>
    </div>
  )
}
