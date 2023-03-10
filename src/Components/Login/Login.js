import React, { useState } from 'react'
import FootballLoader from '../../Common/FootballLoader'
import { login } from '../../services/auth'
import { useNavigate } from 'react-router-dom'
import 'toastr/build/toastr.min.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import logo from '../../Images/logo.svg'
import { setUserData } from '../../actions/userAction'
import { compose } from 'redux'
import { connect } from 'react-redux'

const Login = (props) => {
  const [isLoader, setIsLoader] = useState(false)
  const [isUser, setIsUser] = useState(true)
  const [formData, setFormData] = useState({
    UserName: '',
    Password: ''
  })

  const navigate = useNavigate()

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
    if (!fields.UserName) {
      error.UserName = 'Username cannot be empty!!'
      toast.error(error.UserName)
      count = count + 1
    }

    if (fields.Password !== '') {
      if (fields.Password.length - 1 <= 5) {
        error.Password = 'Password lenghth should be greater than 6!!'
        count = count + 1
      }
    } else {
      error.Password = 'Password cannot be empty!!'
      toast.error(error.Password)
      count = count + 1
    }
    return { error, count }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const returnData = handleErrors(formData)
    if (returnData.count <= 0) {
      setIsLoader(true)
      const userDetail = {
        UserName: formData.UserName,
        Password: formData.Password
      }
      login(userDetail).then((res) => {
        if (res && res.success) {
          toast.success(res.message)
          setIsLoader(false)
          setUserData(res.userData)
          props.onLoginStatusChange(true)
          res.userData.Role === 'Admin'
            ? navigate('/admin/dashboard')
            : navigate('/dashboard')
        } else {
          toast.error(res.message)
          setIsLoader(false)
        }
      })
    }
  }

  const handleForgotPassword = () => {
    props.handleForgotPassword(true)
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
        <div className="form-group">
          <label className="userLable" id="UserNameLabel">
            User Name
          </label>
          <input
            className="form-control userLableInput"
            type="text"
            name="UserName"
            autoComplete="off"
            value={formData.UserName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="userLable" id="PasswordLabel">
            Password
          </label>
          <input
            className="form-control userLableInput"
            type="password"
            name="Password"
            autoComplete="off"
            value={formData.Password}
            onChange={handleChange}
            pattern=".{5,}"
            required
          />
        </div>
        <span className="forgot-password" onClick={handleForgotPassword}>
          Forgot Password?
        </span>
        <button className="submitBtn" onClick={handleSubmit}>
          Login
        </button>
      </form>

      <p className="orData">OR</p>

      <div className="SocialIcons">
        <p className="SocialIcons--header">Login In With</p>
        <div className="socialMedia--box">
          <button className="google socioIcon">
            <i className="fa fa-google-plus"></i>
            {null}
          </button>
          <button className="facebook socioIcon">
            <i className="fa fa-facebook"></i>
            {null}
          </button>
          <button className="instagram socioIcon">
            <i className="fa fa-instagram"></i>
            {null}
          </button>
          <button className="twitter socioIcon">
            <i className="fa fa-twitter"></i>
            {null}
          </button>
        </div>
        <div>
          <p className="newHere">
            New to Here ?{' '}
            <span className="createAccount" onClick={handleUserChange}>
              Create Account
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (userData) => dispatch(setUserData(userData))
  }
}

export default compose(connect(null, mapDispatchToProps))(Login)
