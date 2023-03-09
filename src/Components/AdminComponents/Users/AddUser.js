import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import FootballLoader from '../../../Common/FootballLoader'
import { register } from '../../../services/auth'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    UserName: '',
    Email: '',
    Password: '',
    Role: 'Visitor'
  })
  const [isLoader, setIsLoader] = useState(false)

  const navigate = useNavigate()

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const returnData = handleErrors(formData)
    console.log(returnData.count <= 0)
    if (!returnData.count) {
      setIsLoader(true)
      const userDetail = {
        FirstName: formData.FirstName,
        LastName: formData.LastName,
        UserName: formData.UserName,
        Email: formData.Email,
        Password: formData.Password,
        Role: formData.Role
      }
      register(userDetail).then((res) => {
        if (res.data.success) {
          setIsLoader(false)
          setFormData({})
        } else {
          setIsLoader(false)
          toast.error(res.data.message)
        }
      })
    }
  }

  const handleErrors = (e) => {
    const error = []
    let count = 0
    if (!formData.FirstName) {
      error.FirstName = 'FirstName cannot be empty!!'
      toast.error(error.FirstName)
      count = count + 1
    }

    if (!formData.LastName) {
      error.LastName = 'LastName cannot be empty!!'
      toast.error(error.LastName)
      count = count + 1
    }

    if (!formData.UserName) {
      error.UserName = 'Username required!!'
      toast.error(error.UserName)
      count = count + 1
    }

    if (!formData.Email) {
      error.Email = 'Email cannot be empty'
      toast.error(error.Email)
      count = count + 1
    }

    if (typeof formData.Email !== 'undefined') {
      const lastAtPos = formData.Email.lastIndexOf('@')
      const lastDotPos = formData.Email.lastIndexOf('.')

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          formData.Email.indexOf('@@') === -1 &&
          lastDotPos > 2 &&
          formData.Email.length - lastDotPos > 2
        )
      ) {
        error.Email = 'Email is not valid'
        toast.error(error.Email)
        count = count + 1
      }
    }

    return count
  }

  return (
    <div className="margin-top-70">
      <div className="container">
        <ToastContainer />
        {isLoader ? (
          <div className="loader-resto">
            <div className="loader">
              <FootballLoader />
            </div>
          </div>
        ) : (
          <div className="adduser-admin">
            <div className="HomeLogin--Wrapper">
              <div className="HomeLogin--box">
                <div className="Home--Login">
                  <h3 className="center">New User Registration</h3>
                  <span className="note-section">
                    Note: Password is <b>Test123</b>
                  </span>
                  <form noValidate>
                    <div className="form-group">
                      <label className="userLable" id="FirstNameLabel">
                        Firstname
                      </label>
                      <input
                        className="form-control userLableInput"
                        type="text"
                        name="FirstName"
                        autoComplete="off"
                        value={formData.FirstName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="userLable" id="LastNameLabel">
                        Lastname
                      </label>
                      <input
                        className="form-control userLableInput"
                        type="text"
                        name="LastName"
                        autoComplete="off"
                        value={formData.LastName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="userLable" id="UserNameLabel">
                        Username
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
                        autoComplete="off"
                        disabled
                      />
                    </div>

                    <div className="form-group">
                      <label className="userLable">Role</label>
                      <div className="add-user-radioBlock">
                        <div className="add-user-innerRadio">
                          <label className="userLable" id="AdminLabel">
                            Admin
                          </label>
                          <input
                            type="radio"
                            id="Admin"
                            name="Role"
                            value="Admin"
                            onChange={handleChange}
                            checked={formData.Role === 'Admin'}
                          />
                        </div>
                        <div className="add-user-innerRadio">
                          <label className="userLable" id="VisitorLabel">
                            Visitor
                          </label>
                          <input
                            type="radio"
                            id="Visitor"
                            name="Role"
                            value="Visitor"
                            onChange={handleChange}
                            checked={formData.Role === 'Visitor'}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="add-user-btns">
                      <button
                        className="submitBtn"
                        onClick={() => navigate('/admin/manage-users')}
                      >
                        Go Back
                      </button>

                      <button className="submitBtn" onClick={handleSubmit}>
                        Add User
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddUser
