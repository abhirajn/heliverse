import React from 'react'
import { BiCheckboxSquare } from "react-icons/bi";
export default function Table({first , last , gender , mail , domain , avatar , available , selected , setSelected , handle , team}) {
  return (
    <>

<tr className={selected.some(i=> i === domain) ?  team.some(j=>j === mail) ? "cursor-pointer border-b dark:bg-gray-500 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" : "pointer-events-none border-b dark:bg-gray-500 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
 : "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"}>
                <td className="w-4 p-4">
                    <div className="flex items-center">
                       {(available) ? <>
                        <input onChange={()=>{handle(domain , mail)}} 
                        checked={team.some(i=>i === mail)}
                        id="checkbox-table-search-1" type="checkbox" className="ml-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        {/* <label for ="checkbox-table-search-1" className="sr-only">checkbox</label> */}
                       </> : <><BiCheckboxSquare size={24}  /></>}
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src={avatar} alt="Jese image"/>
                    <div className="ps-3">
                        <div className="text-base font-semibold">{first} {last}</div>
                        <div className="font-normal text-gray-500">{mail}</div>
                    </div>  
                </th>
                <td className="px-6 py-4">
                    {gender}
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> {domain}
                    </div>
                </td>
                <td className="px-6 py-4">
                    {available === true ? <div>Yes</div> : <div>No</div>}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
    

    </>
  )
}
