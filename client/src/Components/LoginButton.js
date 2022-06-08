import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

function LoginButton() {
    const {loginWithRedirect} = useAuth0()

  return (
        <div className='logButtonDiv' >
            <button className='logButton' onClick={() => loginWithRedirect()}>Log In</button>
        </div>
  )
}

export default LoginButton