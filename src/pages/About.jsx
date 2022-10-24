import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context'

const About = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  const {isAuth, isLoading} = useContext(AuthContext)
  return (
    <div>
      
      <div style={{ margin: '15px',display: 'flex', justifyContent: 'center'}}>
      <h2>Info about project</h2>
      </div>
      {isAuth
      ? <div style={{ margin: '15px',display: 'flex', justifyContent: 'center'}}>
      <h4>Just another text</h4>
      </div>
    : <div style={{ margin: '15px',display: 'flex', justifyContent: 'center'}}>
    <h4>Please, login for additional information</h4>
    </div> }
     
      <div
        style={{
          margin: '10px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <MyButton onClick={goBack}>Go Back</MyButton>
      </div>
    </div>
  )
}

export default About
