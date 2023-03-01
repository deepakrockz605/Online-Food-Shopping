import { useEffect } from 'react'
import jwt_decode from 'jwt-decode'

const AuthVerifyComponent = ({ token }) => {
  useEffect(() => {
    setInterval(() => {
      if (jwt_decode(token).exp < Date.now() / 1000) {
        alert('Session Expired')
        localStorage.clear()
        window.location.reload('/')
      }
    }, 60 * 100)
  }, [])

  return null
}

export default AuthVerifyComponent
