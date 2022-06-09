import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function Profile() {
    const { user, isAuthenticated } = useAuth0()
    
  
    return (
      
      isAuthenticated && (
        <div>
          <img src={user.picture} alt="Profile" /> 
          <h1>Welcome, {user.name.toUpperCase()}!</h1>

            
        </div>
    )
  )
}

export default Profile