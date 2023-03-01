import axios from 'axios'

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json'
  }
}

// const baseURL = 'https://spotless-gray-bandicoot.cyclic.app/users'
const baseURL = 'http://localhost:5000/users'

export const register = async (newUser) => {
  return axios
    .post(
      `${baseURL}/register`,
      {
        firstname: newUser.FirstName,
        lastname: newUser.LastName,
        username: newUser.UserName,
        email: newUser.Email,
        password: newUser.Password
      },
      config
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
      config
    )
    .then((res) => {
      localStorage.setItem('usertoken', res.data.token)
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export const logout = () => {
  localStorage.clear()
}
