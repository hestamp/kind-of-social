import React, { useContext } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context'

export default function Login() {
const {isAuth, setIsAuth} = useContext(AuthContext)
  const login = event => {

event.preventDefault()
setIsAuth(true)
localStorage.setItem('auth', 'true')
  }
  return (
    <div>
      <div style={{ margin: '15px',display: 'flex', justifyContent: 'center'}}>
      <h2>Login Page</h2>
      </div>
     
      <form onSubmit={login}>
        <MyInput onChange={(e) => console.log(e.target.value)}type='text' placeholder='Login'/>
        <MyInput type='password' placeholder='Password'/>
        <div style={{ margin: '10px',display: 'flex', justifyContent: 'center'}}>
        <MyButton>Enter</MyButton>
        </div>
        
      </form>
    </div>
  )
}
