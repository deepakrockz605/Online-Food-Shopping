import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
  const userDetails = JSON.parse(localStorage.getItem('userData'))
  return (
    <>
      {userDetails ? (
        userDetails.userData.Role === 'Admin' ? (
          <Navigate to="/admin/dashboard" />
        ) : (
          <Navigate to="/dashboard" />
        )
      ) : (
        children
      )}
    </>
  )
}

export default PublicRoute
