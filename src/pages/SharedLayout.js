import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Hero from '../Hero'
// import Sidebar from '../Sidebar'
// import Footer from '../Footer'

export const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <Outlet />
    </>
  )
}
