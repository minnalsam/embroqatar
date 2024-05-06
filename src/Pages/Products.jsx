import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import CardContainer from '../compontents/Card'

const Products = () => {
  const cards = [{id:1,title:"embroidery",img:'/embroidery.jpeg'},{id:2,title:"software",img:'/wilcom.jpeg'},]
  return (
    <div className='h-screen'>
          <h1 className='text-3xl font-bold text-blue-500 text-center'>
        This is Products Page
      </h1>
      <div className='flex gap-12 justify-center items-center mt-12'>
          {cards.map((card,i) => {
            return (
              <Link to={ `${card.title}`} key={i}>
                <CardContainer id={card.id} title={card.title} img={ card.img}  />
              </Link>
            )
          })}
              
          </div>
      <Outlet />
    </div>
  )
}

export default Products