import React from 'react'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate("/register")
  }

  const handleClickLogin = () => {
    navigate("/login")
  }

  const handleClick = () => {
    navigate("/score")
  }


 
  return (
    <>
      <div>
      <p>Landing Page</p>
      <div>

      <button onClick={handleClickRegister}>Register</button>
      <br />
      <br />
      <button onClick={handleClickLogin}>Login</button>
      <br />
      <br />
      <button onClick={handleClick}>Score</button>
      </div>
      </div>
    </>
  )
}

export default LandingPage