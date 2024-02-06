import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
  
    const data=useLoaderData();   // this is another way to fetch api

    //THis is one way to fetch data 

    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/vaishnav162001')
    //     .then(response =>response.json())
    //     .then(data =>{
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='bg-gray-500 text-center text-3xl text-white'>
        Github Followers:{data.followers}
        <img src={data.avatar_url} alt="vaishhav_img" className='h-25 w-26'/>
        </div>
  )
}

export default Github

//This is another way to fetch api this provide by react router LOADER 
//loader is faster than useEffect because is work on mouse hover on word
export const githubInfoLoader= async ()=>{
    const response =await fetch('https://api.github.com/users/vaishnav162001')
    return response.json(); 
}