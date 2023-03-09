import React from 'react'
import FixedContent from '../Components/FixedContent'
import { Navigate } from 'react-router-dom'
import AuthVerifyComponent from './AuthVerifyComponent'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { setUserData } from '../actions/userAction'

const ProtectedRoute = ({ children, setUserData }) => {
  const userDetails = JSON.parse(localStorage.getItem('userData'))
  userDetails && setUserData(userDetails.userData)
  return (
    <>
      {userDetails && userDetails !== undefined ? (
        userDetails.userData.Role === 'Admin' ? (
          <>
            <FixedContent userData={userDetails.userData} />
            {children}
            <AuthVerifyComponent token={userDetails.token} />
          </>
        ) : (
          <Navigate to="/dashboard" />
        )
      ) : (
        <Navigate to="/" />
      )}
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (userData) => dispatch(setUserData(userData))
  }
}

export default compose(connect(null, mapDispatchToProps))(ProtectedRoute)
