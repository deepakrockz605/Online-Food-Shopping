import axios from 'axios'
import { baseURL } from './index'

const config = (token, isFormData) => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
}

export const register = async (newUser) => {
  return axios
    .post(
      `${baseURL}/register`,
      {
        firstname: newUser.FirstName,
        lastname: newUser.LastName,
        username: newUser.UserName,
        email: newUser.Email,
        password: newUser.Password,
        role: newUser.Role
      },
      config()
    )
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}

export const login = async (user) => {
  return axios
    .post(
      `${baseURL}/login`,
      {
        username: user.UserName,
        password: user.Password
      },
      config()
    )
    .then((res) => {
      localStorage.setItem('userData', JSON.stringify(res.data))
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export const passwordReset = async (newUser) => {
  return axios
    .post(
      `${baseURL}/reset-password`,
      {
        email: newUser.Email
      },
      config()
    )
    .then((res) => {
      localStorage.setItem('resetToken', res.data.token)
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export const passwordUpdate = async (userDetails, token) => {
  return axios
    .post(
      `${baseURL}/update-password`,
      {
        password: userDetails.Password,
        userId: userDetails.userId
      },
      config(token)
    )
    .then((res) => {
      localStorage.clear()
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export const fetchUsers = async (token) => {
  return axios
    .get(`${baseURL}/fetch-users`, config(token))
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export const deleteUser = async (token, id) => {
  return axios
    .delete(`${baseURL}/delete-user/${id}`, config(token))
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export const uploadProduct = async (formData, token) => {
  return await axios
    .post(`${baseURL}/upload-product`, formData, config(token, true))
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export const fetchProducts = async (token) => {
  return axios
    .get(`${baseURL}/get-products`, config(token))
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export const logout = () => {
  localStorage.clear()
}
