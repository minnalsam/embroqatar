import React from 'react'
import image from '../../public/error-404.jpeg'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const navigate = useNavigate()
  return (  
      <div className='flex flex-col justify-center items-center min-h-svh'>
          <img src={ image} alt='Embroqatar 404 page' className='py-2'/>
          <div className='text-3xl uppercase'>404 - Page Not Found</div>
          <p className='py-4'>We can't seem to find page you are looking for.</p>
          <button onClick={()=>navigate('/')} className='px-2 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded'>Go To Homepage</button>
    </div>
  )
}

export default NotFoundPage