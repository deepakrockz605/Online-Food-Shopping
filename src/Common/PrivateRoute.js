import React from 'react'
import FixedContent from '../Components/FixedContent'
import { Navigate } from 'react-router-dom'
import AuthVerifyComponent from './AuthVerifyComponent'

const PrivateRoute = ({ children }) => {
  const loggedInUser = localStorage.getItem('usertoken')
  return <>{loggedInUser ? <><FixedContent />{children}<AuthVerifyComponent token={loggedInUser} /></> : <Navigate to="/" />}</>
}

export default PrivateRoute
