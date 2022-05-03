
import React from 'react'
import { useAuth } from '../context/userAuthContext'
const Main = () => {
    const {user, logout} = useAuth()
    const handleLogout = async() => {
        try {
            await logout()
        } catch (error) {
            console.log(error)
        }
        
    }
  return (
      <>
    <h1>Hello {user.email}</h1>
    <button onClick={handleLogout}>Sign Out</button>
    </>
  )
}

export default Main