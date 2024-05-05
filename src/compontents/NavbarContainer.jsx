import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavbarContainer = () => {
  return (
      <nav className='flex justify-around items-center h-20 bg-cyan-300'>
          <div className=''>Logo1</div>
          <div className='navbar__nav'>
              <ul className='flex items-center gap-4'>
                  <li>
                      <NavLink to='/'>Home</NavLink>
                  </li>
                  <li>
                      <NavLink to='/about'>About</NavLink>
                  </li>
                  <li>
                      <NavLink to='/products'>Products</NavLink>
                  </li>
                  <li>
                      <NavLink to='/contact'>Contact</NavLink>
                  </li>
                  <li>
                      <NavLink to='/service'>Service</NavLink>
                  </li>
              </ul>
          </div>
    </nav>
  )
}

export default NavbarContainer