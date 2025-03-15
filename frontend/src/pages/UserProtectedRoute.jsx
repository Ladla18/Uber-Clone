import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

const UserProtectedRoute = ({children}) => {
 
    const token = localStorage.getItem("token")
    const nav = useNavigate()
    useEffect(()=>{
        if(!token){
            nav('/login')
        }
    },[token])
  return (
    <>
    {children}
    </>
  )
}

export default UserProtectedRoute