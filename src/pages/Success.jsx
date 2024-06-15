import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Success = () => {
  const navigate = useNavigate("");
  return (
    <div className='d flex justify-center items-center h-screen w-full flex-col gap-5'>
        <h2 className='text-3xl text-white'>Thank you for signing up!</h2>
        <a className="px-5 py-2 bg-blue-500 hover:bg-blue-400 rounded-xl text-white" href='/'>Go back</a>
    </div>
  )
}

export default Success;