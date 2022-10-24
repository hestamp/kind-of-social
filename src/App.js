import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/navbar/Navbar'
import { AuthContext } from './context'
import './styles/App.css'

function App() {


  const [isLoading, setIsLoading] = useState(true)
  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])
  return (
    <AuthContext.Provider value={{
isAuth, setIsAuth, isLoading
    }}>
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
