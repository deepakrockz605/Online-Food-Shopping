import React, { useState } from 'react'
import Slider from './Slider'
import Login from './Login'
import SignUp from './SignUp'
import PasswordReset from './PasswordReset'
import { connect } from 'react-redux'
import { onLoginStatusChange } from '../../actions/cartActions'
import { ToastContainer, toast } from 'react-toastify'
import './HomeLogin.scss'

const HomeLogin = (props) => {
  const [isLogin, setIsLogin] = useState(false)
  const [isPasswordReset, setIsPasswordReset] = useState(false)

  const handleUserLogin = (langValue, message) => {
    setIsLogin(langValue)
    setIsPasswordReset(false)
    message && toast.success(message)
  }

  const handleForgotPassword = (value) => {
    setIsPasswordReset(value)
  }

  const onLoginStatusChange = (value) => {
    props.onLoginStatusChange(value)
  }

  return (
    <div
      className={
        'HomeLogin--Wrapper ' + (isLogin ? 'HomeLogin--RowWrapper' : '')
      }
    >
      <ToastContainer />
      <div className="HomeLogin--carausal">
        <Slider />
      </div>
      <div
        className={
          'HomeLogin--box ' + (isLogin ? 'HomeLogin--box--RowWrapper' : '')
        }
      >
        {isPasswordReset ? (
          <PasswordReset
            handleLoginType={handleUserLogin}
            handleForgotPassword={handleForgotPassword}
          />
        ) : (
          <>
            {isLogin ? (
              <SignUp handleLoginType={handleUserLogin} />
            ) : (
              <Login
                handleLoginType={handleUserLogin}
                onLoginStatusChange={onLoginStatusChange}
                handleForgotPassword={handleForgotPassword}
              />
            )}
          </>
        )}
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginStatusChange: (value) => {
      dispatch(onLoginStatusChange(value))
    }
  }
}

export default connect(null, mapDispatchToProps)(HomeLogin)
