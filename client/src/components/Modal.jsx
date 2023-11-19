import { useState } from "react";

export default function Modal({showModal , setShowModal,showTeam, setShowTeam}) {
//    console.log(showTeam)
    return (
        <>
            <div className="flex items-center justify-center ">
               
            </div>            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto text-center w-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-auto overflow-scroll p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                   
                                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                        <h4 className="text-2xl font-medium text-gray-800 font-mono">
                                            {showTeam.name}
                                        </h4>
                                        <table className="overflow-scroll">
                                     {showTeam.members.map((d)=>
                                     <>     <tr className=" text-white cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              
                                     <th scope="row" className="flex items-center px-1  py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                         <img className="w-10 h-10 rounded-full" src={d.avatar} alt="Jese image"/>
                                         <div className="ps-3">
                                             <div className="text-base font-semibold">{d.first_name} {d.last_name}</div>
                                             <div className="font-normal text-gray-500">{d.email}</div>
                                         </div>  
                                     </th>
                                     <td className="px-4 py-4">
                                         {d.gender}
                                     </td>
                                     <td className="px-4 py-4">
                                         <div className="flex items-center">
                                             <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> {d.domain}
                                         </div>
                                     </td>
                                 </tr></>
                                       
                                     )}
                                        </table>
                                        
                                        <div className="items-center gap-2 mt-3 sm:flex">
                                            <button
                                                className="w-full mt-2 p-2.5 bg-red-200 rounded-3xl flex-1 text-gray-800  outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}