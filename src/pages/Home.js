import React from 'react'
import { Link } from 'react-router-dom'
import { links } from '../data'

export const Home = () => {
  return (
    <>
      <section className='section'>
        {links.map((link) => {
          return (
            <article key={link.id} className='article'>
              <div className='icon'>
                {link.image ? (
                  <img src={link.image} alt='icon' />
                ) : (
                  <div className='icon-icon' id={link.label}>
                    {link.icon}{' '}
                  </div>
                )}
              </div>
              <div className='a-link'>
                <a href={link.referral}>
                  <h3>{link.label}</h3>
                </a>
              </div>
              <div className='link'>
                <Link to={`/${link.id}`}>
                  <h4> mehr Info</h4>
                </Link>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}
