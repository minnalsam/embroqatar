import React from 'react'

const Topbar = () => {
  return (
    <div className='flex justify-end bg-blue-500 px-6'>
          <button className='mx-2 px-5 py-1 rounded-md hover:bg-indigo-600 hover:text-white'>En</button>
          <div className='text-xl'>/</div>
    <button className='mx-2 px-5 py-1 rounded-md hover:bg-indigo-600 hover:text-white'>العرب</button>
    </div>
  )
}

export default Topbar