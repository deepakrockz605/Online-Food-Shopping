import React, { useState, useEffect } from 'react'
import FootballLoader from '../../Common/FootballLoader'
import { passwordReset, passwordUpdate } from '../../services/auth'
import 'toastr/build/toastr.min.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import logo from '../../Images/logo.svg'
import { setUserData } from '../../actions/userAction'
import { compose } from 'redux'
import { connect } from 'react-redux'

const PasswordReset = (props) => {
  const [isLoader, setIsLoader] = useState(false)
  const [isPasswordReset, setPasswordReset] = useState(false)
  const [isUser, setIsUser] = useState(false)
  const [userId, setUserId] = useState(null)
  const [formData, setFormData] = useState({
    Email: '',
    Password: '',
    PasswordConfirm: ''
  })

  useEffect(() => {
    return localStorage.clear()
  }, [])

  const handleUserChange = (e) => {
    setIsUser(false)
    props.handleLoginType(isUser)
  }

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleErrors = (e) => {
    const fields = formData
    const error = []
    let count = 0
    if (isPasswordReset) {
      if (fields.Password !== '') {
        if (fields.Password.length - 1 <= 5) {
          error.Password = 'Password lenghth should be greater than 6!!'
          toast.error(error.Password)
          count = count + 1
        }
      } else {
        error.Password = 'Password cannot be empty!!'
        toast.error(error.Password)
        count = count + 1
      }

      if (fields.PasswordConfirm !== '') {
        if (fields.Password !== fields.PasswordConfirm) {
          error.PasswordConfirm = 'Password does not matched!!'
          toast.error(error.PasswordConfirm)
          count = count + 1
        }
      } else {
        error.PasswordConfirm = 'Confirm Password cannot be empty!!'
        toast.error(error.PasswordConfirm)
        count = count + 1
      }
    } else {
      if (!fields.Email) {
        error.Email = 'Email cannot be empty!!'
        toast.error(error.Email)
        count = count + 1
      }
    }

    return { error, count }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const returnData = handleErrors(formData)
    if (returnData.count <= 0) {
      setIsLoader(true)
      const userDetail = {
        Email: formData.Email,
        Password: formData.Password,
        userId
      }
      if (isPasswordReset) {
        const loggedInUser = localStorage.getItem('resetToken')
        passwordUpdate(userDetail, loggedInUser).then((res) => {
          if (res && res.success) {
            window.location.reload()
            toast.success(res.message)
            setIsLoader(false)
            setUserId(null)
          } else {
            toast.error(res.message)
            setIsLoader(false)
            setPasswordReset(false)
          }
        })
      } else {
        passwordReset(userDetail).then((res) => {
          if (res && res.success) {
            toast.success(res.message)
            setIsLoader(false)
            setPasswordReset(true)
            setUserId(res.userId)
          } else {
            toast.error(res.message)
            setIsLoader(false)
            setPasswordReset(false)
          }
        })
      }
    }
  }

  return (
    <div className="Home--Login">
      <ToastContainer />
      {isLoader ? (
        <div className="loader-resto">
          <div className="loader">
            <FootballLoader />
          </div>
        </div>
      ) : null}
      <p className="subHeader">
        <span className="subHeaderBlock">
          <img src={logo} alt="logo" style={{ maxWidth: '80%' }} />
        </span>
      </p>
      <form noValidate>
        {isPasswordReset ? (
          <>
            <div className="form-group">
              <label className="userLable" id="PasswordLabel">
                Password
              </label>
              <input
                className="form-control userLableInput"
                type="password"
                name="Password"
                value={formData.Password}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="userLable" id="PasswordConfirmLabel">
                Confirm Password
              </label>
              <input
                className="form-control userLableInput"
                type="password"
                name="PasswordConfirm"
                value={formData.PasswordConfirm}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
          </>
        ) : (
          <div className="form-group">
            <label className="userLable" id="EmailLabel">
              Email
            </label>
            <input
              className="form-control userLableInput"
              type="email"
              name="Email"
              autoComplete="off"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <button className="submitBtn" onClick={handleSubmit}>
          {isPasswordReset ? 'Update Password' : 'Reset Password'}
        </button>
      </form>

      <p className="orData">OR</p>

      <div className="SocialIcons">
        <p className="newHere" style={{ marginTop: '10px !important' }}>
          Already have an account ?{' '}
          <span className="createAccount" onClick={handleUserChange}>
            Login
          </span>
        </p>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (userData) => dispatch(setUserData(userData))
  }
}

export default compose(connect(null, mapDispatchToProps))(PasswordReset)
