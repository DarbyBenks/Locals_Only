import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function Profile() {
    const { user, isAuthenticated } = useAuth0()
    
  
    return (
      
      isAuthenticated && (
        <div id='userDiv'>
          <img src={user.picture} alt="Profile" /> 
          <h1>Welcome, {user.name}!</h1>
          <p>Let your Journey Begin</p>

            
        </div>
    )
  )
}

export default Profile