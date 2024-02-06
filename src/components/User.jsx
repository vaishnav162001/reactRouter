import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userid}=useParams();
  return (
    <div className='bg-gray-500 text-white text-center p-4 text-3xl'> User : {userid}</div>
  )
}

export default User