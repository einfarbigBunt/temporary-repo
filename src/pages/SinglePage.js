import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'

import { links } from '../data'

export const SinglePage = () => {
  const { loading } = useGlobalContext()
  console.log(loading)
  const { pageId } = useParams()
  // console.log(useParams())
  console.log(pageId)

  const singlePage = links.find((link) => link.id == pageId)
  console.log(singlePage)
  // console.log('typeof links.id: ' + typeof links.id)
  // console.log('typeof pageId:' + typeof pageId)
  // console.log(getPage)

  // links.map((link) => {
  //   return console.log(link.id)
  // })

  const { label, imageSingle } = singlePage

  return (
    <section className='section-page'>
      <div className='single-page'>
        {/* <h2>{pageId}</h2> */}
        <Link to='/'>
          <h4>Zurück</h4>
        </Link>
        <div className='single-image'>
          <img src={imageSingle} alt={label} />
        </div>
        {/* <h5>{label}</h5> */}

        <Link to='/'>
          <h4>Zurück</h4>
        </Link>
      </div>
    </section>
  )
}
