import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
  const loggedInUser = localStorage.getItem('usertoken')
  return <>{loggedInUser ? <Navigate to="/dashboard" /> : children}</>
}

export default PublicRoute
