import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'

export default function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <div className="navbar">
      
      <div className="navbar__links">
        <Link className="links" to="/posts">
          Posts
        </Link>
        <Link className="links" to="/about">
          About
        </Link>
        
      </div>
      {isAuth
      ? <MyButton onClick={logout} style={{color: 'white'}}>
      Exit
    </MyButton>
    : <Link className="links" to="/login">
    Login
  </Link>}
      
    </div>
  )
}
