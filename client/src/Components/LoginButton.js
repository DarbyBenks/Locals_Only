import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

function LoginButton() {
    const {loginWithRedirect, isAuthenticated} = useAuth0()

  return (
    !isAuthenticated && (
      <>
            <button id='loginButton' className='logButton' onClick={() => loginWithRedirect()}>Log In</button>
      </>
    )
  )
}

export default LoginButton