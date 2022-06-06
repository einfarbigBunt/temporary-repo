import React from 'react'
import { useGlobalContext } from './context'

import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
// import { FaCalendar } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  // console.log(isSidebarOpen)
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <div className='nav-logo'>crypto</div>
          {/* <div className={`${isSidebarOpen ? 'nav-links show' : 'nav-links'}`}>
        

            <NavLink to='about' className='link-btn'>
              Shop
            </NavLink>
          </div> */}
          {/* <button
            className='btn toggle-btn'
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button> */}
          <NavLink to='/shop' className='link-btn'>
            Shop
          </NavLink>
        </div>
        {/* <div className='nav-links'>
          <NavLink to='/' className='link-btn'>
            Home
          </NavLink>

          <NavLink to='about' className='link-btn'>
            Shop
          </NavLink>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar
