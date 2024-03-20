import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div className='flex items-center justify-center flex-col h-[92vh]'>
    <div className='text-2xl font bold '>Page Not found</div>
    <Link to='/' className='border m-5 p-3 bg-red-500 font-semibold text-white'>Go back to Home Page</Link>
    </div>
    </>
  )
}

export default Error