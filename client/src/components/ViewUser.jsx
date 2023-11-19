import axios from 'axios';
import React, { useEffect, useState , onChange } from 'react'

export default function ViewUser({showModal , setShowModal , id}) {
    // console.log(id);
    const[first , setFirst] = useState();
    const[last , setLast] = useState();
    const[gender , setGender] = useState();
    const[dom , setDom] = useState();
    const[avail , setAvail] = useState(true);
    const[ava , setAva] = useState();
    const[mail , setMail] = useState();
    const[check , setCheck] = useState(false)
    // const[upda]
    // const[data , setData] = useState();


    const init = async()=>{
        // console.log(id)
        console.log("hi")
        if(id){
            console.log("hi2")
            const res = await axios.get(`https://heliverse-backend-xxxd.onrender.com/api/users/${id}`);
           setCheck(false)
            setFirst(res.data.first_name)
            setLast(res.data.last_name)
            setGender(res.data.gender)
            setDom(res.data.domain)
            setAvail(res.data.available)
            setAva(res.data.avatar)
            setMail(res.data.email)
        }
        // console.log(res)
    }
  
    useEffect(()=>{
        // setCheck(true)
        init();
    },[id])

    const handleUpdate = async(e)=>{
        e.preventDefault();
        console.log("hi")
        const obj = {
            "first_name" : first,
            "last_name"  :last,
            "email" : mail,
            "gender" : gender,
            "avatar" : ava,
            "domain" : dom,
            "available" : avail
        }
        // console.log("hi")
       if(id){
        await axios.put(`https://heliverse-backend-xxxd.onrender.com/api/users/${id}`, {
            "obj" : obj
          }).then(()=>alert("updated"))
       }
       

    }

  const handleclose = (e)=>{
    e.preventDefault();
    setShowModal(false)
  }

  const handleDelete = async(e)=>{
    e.preventDefault();
  await  axios.delete(`https://heliverse-backend-xxxd.onrender.com/api/users/${id}`).then(()=>alert("deleted"))

}

  return (
    <div>
         <>
            <div className="flex items-center justify-center ">
               
            </div>            {showModal ? (
                <>
                 <div   className="fixed inset-0 z-10 overflow-y-auto text-center w-auto ">

                        <div
                            className="fixed inset-0 w-full h-full "
                        ></div>
                     <div className=' flex justify-center  '>
   

   <form className='m-4 md:m-8 lg:m-12 w-full lg:w-2/4 border-2  border-black p-6 bg-white'>
   <div  className='z-10 m-4 text-center text-blue-600 text-3xl font-mono antialiased font-bold'><p>Update/Delete Details of User:</p>
   </div>
{/* <div className='cursor-pointer z-10'><button    className='z-10 cursor-pointer p-2 mb-4 bg-red-700 rounded-3xl'>Close</button></div> */}
     <div className="relative z-0 w-full mb-6 group">
         <input
         onChange={(e)=>{setMail( e.target.value)}}
         type="email" value={mail} name="floating_email" id="floating_email" className="  block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
         <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
     </div>
     <div className="relative z-0 w-full mb-6 group">
         <input 
         onChange={(e)=>{setDom(e.target.value)}}
         type="text" value={dom} name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
         <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Domain</label>
     </div>
     <div className="relative z-0 w-full mb-6 group">
         <input 
         onChange={(e)=>{setAva(e.target.value)}}
         type="text" value={ava} name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
         <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Avatar</label>
     </div>
     <div className="grid md:grid-cols-2 md:gap-6">
       <div className="relative z-0 w-full mb-6 group">
           <input 
           onChange={(e)=>{setFirst(e.target.value)}}
           type="text" value={first} name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
           <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
       </div>
       <div className="relative z-0 w-full mb-6 group">
           <input
           onChange={(e)=>{setLast(e.target.value)}}
           type="text" value={last} name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
           <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
       </div>
     </div>
     <div className="grid md:grid-cols-2 md:gap-6">
       <div className="relative z-0 w-full mb-6 group">
           <input
           onChange={(e)=>{setGender(e.target.value)}}
           type="text" value={gender}   name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
           <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label>
       </div>
       <div className="relative z-0 w-full mb-6 group ">
           <p className='text-gray-500'>Availbility</p>
   <div className="flex items-center mb-4">
       <input id="default-radio-1" 
       onClick={()=>{setAvail(true)}}
       type="radio" checked={avail === true} value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
       <label for="default-radio-1" className="ms-2 text-sm font-medium text-black">True</label>
   </div>
   <div className="flex items-center">
       <input
       onClick={()=>{setAvail(false)}}
       checked={avail === false} id="default-radio-2" type="radio" value=""   name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
       <label for="default-radio-2" className="ms-2 text-sm font-medium text-black">False</label>
   </div>
   
           {/* <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Availability</label> */}
       </div>
     </div>
     <div className='flex w-full'>
     <button  onClick={(e) => handleDelete(e)} className="z-10 w-2/6 h-10 mr-2 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg">Delete</button>
    
    <button onClick={(e) => handleUpdate(e)} className="w-2/6 h-10 z-10 mr-2 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg">Update</button>
    <button onClick={(e) => handleclose(e)} className="w-2/6 h-10 z-10 text-white bg-red-700 hover:bg-blue-800  font-medium rounded-lg">Close</button>

        

     </div>
   </form>
   
   
   
       </div>
       </div>
                </>
            ) : ""}
        </>
    </div>
  )
}
