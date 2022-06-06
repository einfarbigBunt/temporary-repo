import React from 'react'
// import Sidebar from './Sidebar'
import { useGlobalContext } from './context'

const Hero = () => {
  const { hero } = useGlobalContext()
  // console.log(hero)

  const background = {
    backgroundImage: `url(${hero.regular})`,
    // backgroundSize: 'cover',
    // display: 'grid',
    // gridTemplateColumns: '1fr',
    Height: '100vh',
    // marginTop: '-10rem',
    // zIndex: '-1',
  }

  return <section className='hero' style={background}></section>
}

export default Hero
