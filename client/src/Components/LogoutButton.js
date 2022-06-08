import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

function LogoutButton() {
    const {logout} = useAuth0()

  return (
        <div className='logButtonDiv' >
            <button className='logButton' onClick={() => logout()}>Log Out</button>
        </div>
  )
}

export default LogoutButton