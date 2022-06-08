import React from 'react'
import {useNavigate} from 'react-router-dom'

function StartButton() {
    let navigate = useNavigate()
  return (
    <div id='startButtonDiv'>
    <button id='startButton' onClick={() => {navigate("/about")}}>Start Your Adventure</button>
    </div>
  )
}

export default StartButton