import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from '../components/UI/button/MyButton'

export default function NoPage() {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <div>
      <div style={{ margin: '15px',display: 'flex', justifyContent: 'center'}}>
      <h2>Sorry, page is not found</h2>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <MyButton onClick={goBack}>Go Back</MyButton>
      </div>
    </div>
  )
}
