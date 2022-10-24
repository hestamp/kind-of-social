import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context'

import { publicRoutes, privateRoutes } from '../router/fileRouter'
import Loader from './UI/loader/Loader'

export default function AppRouter() {
  const {isAuth, isLoading} = useContext(AuthContext)

  if( isLoading) {
    return (<Loader/>)}
  return (
    isAuth
    ? <Routes>
    {privateRoutes.map ((route, index) => {
       return (
      <Route key={index} path={route.path} element={<route.element/>}></Route>)
    })}
  </Routes>
  :
  <Routes>
    {publicRoutes.map ((route, index) => {
       return (
      <Route key={index} path={route.path} element={<route.element to="/login" replace />}></Route>)
    })}
    </Routes>
  )
}

      