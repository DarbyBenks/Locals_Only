import React from 'react'
import {useNavigate} from 'react-router-dom'

function StartButton() {
    let navigate = useNavigate()
  return (
    <div className='startButtonDiv'>
      <button className='startButton' onClick={() => {navigate("/about")}}>Start Your Adventure</button>
    </div>
  )
}

export default StartButton