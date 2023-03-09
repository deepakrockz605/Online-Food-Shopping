import React from 'react'
import FixedContent from '../Components/FixedContent'
import { Navigate } from 'react-router-dom'
import AuthVerifyComponent from './AuthVerifyComponent'

const PrivateRoute = ({ children }) => {
  const userDetails = JSON.parse(localStorage.getItem('userData'))
  return (
    <>
      {userDetails && userDetails !== undefined ? (
        userDetails.userData.Role === 'Visitor' ? (
          <>
            <FixedContent userData={userDetails.userData} />
            {children}
            <AuthVerifyComponent token={userDetails.token} />
          </>
        ) : (
          <Navigate to="/admin/dashboard" />
        )
      ) : (
        <Navigate to="/" />
      )}
    </>
  )
}

export default PrivateRoute
