import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {FaBarsStaggered, FaXmark} from 'react-icons/fa6';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
const Navbar = () => {
  const navigate=useNavigate();
    const [isMenuOpen, setIsMenuOpen]=useState(false);
    const [isLoggedIn,setIsLoggedIn]=useState(true);
    const handleMenuToggler=()=>{
      setIsMenuOpen(!isMenuOpen)
    }

    const handleLogOut = async()=>{
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setIsLoggedIn(false);
      navigate('/login');
      // location.reload();
    }

    const navItems=[
      {path: '/', title: 'start a search'},
      {path: '/my-job', title: 'My Jobs'},
      {path: '/salary', title: 'Salary Estimated'},
      {path: '/post-job', title: 'Post A Job'},
    ]

  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <nav className='flex justify-between items-center py-6'>
            <a href='/'className='flex items-center gap-2 text-2xl text-black'>
              <svg src='images.png' width='29' height='30' viewBox='0 0 29 30'>
                <circle cx='12.0143' cy='12.0143' fill='#3575E2' fillOpacity='0.4'/>
              </svg>
              <span>Job Portal</span>
              </a>
              <ul className='hidden md:flex gap-12'>
                {
                  navItems.map(({path,title})=>(
                    <li key={path} className='text-base text-primary'>
                      <NavLink
                      to={path}
                      className={({ isActive}) =>
                        isActive? "active": ""
                      }
                      >
                        {title}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
                {/* large devices */}
              <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>{isLoggedIn? <button onClick={handleLogOut} className='py-2 px-5 border rounded bg-blue text-white'>Log Out</button> : 
              <>              
              <Link to="/login" className='py-2 px-5 border rounded'>Log In</Link>
              <Link to="/register" className='py-2 px-5 border rounded bg-blue text-white'>Sing Up</Link>
              </>
               }</div>
                {/* mobile divece */}
                <div className='md:hidden block'>
                  <button onClick={handleMenuToggler}>{
                    isMenuOpen? <FaXmark className='w-5 h-5 text-primary'/> : <FaBarsStaggered className='w-5 h-5 text-primary'/>
                  }</button>
                </div>
            
        </nav>
        <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
            <ul>
            {
                  navItems.map(({path,title})=>(
                    <li key={path} className='text-base text-white first:text-white py-1'>
                      <NavLink
                      to={path}
                      className={({ isActive}) =>
                        isActive? "active": ""
                      }
                      >
                        {title}
                      </NavLink>
                    </li>
                  ))
                }
            </ul>
        </div>
    </header>
  )
}

export default Navbar


