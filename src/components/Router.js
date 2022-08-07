import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../routes/Home'
import Auth from '../routes/Auth'

export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path='/'>
              <Home />
            </Route>
          </>
        ) : (
          <>
            <Route path='/'>
              <Auth />
            </Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  )
}
