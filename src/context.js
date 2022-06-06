import React, { useState, useContext, useEffect } from 'react'

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
// const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [hero, setHero] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchImage = async () => {
    setLoading(true)

    let url

    const page = `&page=3`
    const urlQuery = `&query=space`

    url = `${searchUrl}${clientID}${urlQuery}${page}`
    // url = mainUrl + clientID + space

    try {
      const response = await fetch(url)
      const data = await response.json()
      // console.log(data)
      // console.log(data.results.length)
      const results = data.results
      const num = random(results)
      // console.log(data.results[num])
      const { urls } = data.results[num]

      setHero(urls)

      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImage()
  }, [])

  const random = (results) => {
    const num = Math.floor(Math.random() * results.length)
    // console.log(`number: ${num}`)
    return num
  }

  return (
    <AppContext.Provider
      value={{
        hero,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

//custom hook

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
