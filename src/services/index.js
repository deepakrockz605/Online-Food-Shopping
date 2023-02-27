import axios from 'axios'

const baseUrl = axios.create({
  baseURL: 'https://localhost:5000/users/'
  // baseURL: 'https://spotless-gray-bandicoot.cyclic.app/users/'
})

export default baseUrl;