import React from 'react'
import { Routes, Route } from 'react-router-dom'
import OurStory from './Components/OurStory'
import Dashboard from './Components/Dashboard'
import GetIntouch from './Components/GetIntouch'
import MyCart from './Components/Mycart'
import ThankYou from './Components/ThankYou'
import HomeLogin from './Components/Login/HomeLogin'
import PageNotFound from './Components/PageNotFound'
import PrivateRoute from './Common/PrivateRoute'
import PublicRoute from './Common/PublicRoute'

const Root = () => {
  return (
    <Routes>
      <Route path="/"
        element={
          <PublicRoute>
            <HomeLogin />
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/food-menu"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/our-story"
        element={
          <PrivateRoute>
            <OurStory />
          </PrivateRoute>
        }
      />

      <Route
        path="/get-in-touch"
        element={
          <PrivateRoute>
            <GetIntouch />
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        }
      />
      <Route
        path="/thank-you"
        element={
          <PrivateRoute>
            <ThankYou />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Root
