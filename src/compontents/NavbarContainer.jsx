import { NavLink } from "react-router-dom";
import Topbar from "./Topbar";

const NavbarContainer = () => {
  return (
    <div>
      <Topbar />
      <nav className='flex justify-around items-center bg-cyan-300'>
        <div className=''>Logo1</div>
        <button className='sm:hidden '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-6 h-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5'
            />
          </svg>
        </button>
        <div className='navbar__nav hidden sm:block'>
          <ul className='flex items-center gap-4 '>
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
              <NavLink to='/service'>Service</NavLink>
            </li>
            <li>
              <NavLink to='/admin'>Admin</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className='p-2 bg-red-300 rounded'>Contact</div>
          </nav>
          <div className='navbar__nav'>
              <ul className='absolute items-center gap-4 '>
                  <li>
                      <NavLink to='/'>Home</NavLink>
                  </li>
                  <li>
                      <NavLink to='/about'>About</NavLink>
                  </li>
                  <li>
                      <NavLink to='/products' >Products</NavLink>
                      
                  </li>
                  <li>
                      <NavLink to='/service'>Service</NavLink>
                  </li>
                  <li>
                      <NavLink to='/admin'>Admin</NavLink>
                  </li>
                  <li>
                      <NavLink to='/contact'>Contact</NavLink>
                  </li>
                  
              </ul>
          </div>
    </div>
  );
};

export default NavbarContainer;
