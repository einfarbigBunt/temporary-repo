// import { BrowserRouter, Route } from 'react-router-dom'
// import { Switch } from 'react-router'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Error } from './pages/Error'

// import Navbar from './Navbar'

import { SharedLayout } from './pages/SharedLayout'
import { SinglePage } from './pages/SinglePage'
import { Shop } from './pages/Shop'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/:pageId' element={<SinglePage />} />

          <Route path='/shop' element={<Shop />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
