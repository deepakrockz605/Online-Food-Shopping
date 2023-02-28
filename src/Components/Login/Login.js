import React, { useState } from 'react'
import FootballLoader from '../../Common/FootballLoader'
import { login } from '../../services/auth'
import { useNavigate } from 'react-router-dom'
import 'toastr/build/toastr.min.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import logo from '../../Images/logo.svg'

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
        console.log(res)
        if (res && res.success) {
          toast.success(res.message)
          setIsLoader(false)
          props.onLoginStatusChange(true)
          navigate('/dashboard')
        } else {
          toast.error(res.message)
          setIsLoader(false)
        }
      })
    }
  }

  return (
    <div className="Home--Login">
      <ToastContainer />
      {isLoader
        ? (
        <div className="loader-resto">
          <div className="loader">
            <FootballLoader />
          </div>
        </div>
          )
        : null}
      <p className="subHeader">
        <span className="subHeaderBlock">
          <img src={logo} alt="logo" style={{ width: '100%' }} />
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
            value={formData.Password}
            onChange={handleChange}
            pattern=".{5,}"
            required
          />
        </div>
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

export default Login
