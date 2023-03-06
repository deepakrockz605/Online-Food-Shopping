import React from 'react'
import { Routes, Route } from 'react-router-dom'
import OurStory from './Components/OurStory'
import Dashboard from './Components/Dashboard'
import GetIntouch from './Components/GetIntouch'
import MyCart from './Components/Mycart'
import ThankYou from './Components/ThankYou'
import HomeLogin from './Components/Login/HomeLogin'

import AdminDashboard from './Components/AdminComponents/AdminDashboard'
import UserList from './Components/AdminComponents/Users/UserList'
import AddUser from './Components/AdminComponents/Users/AddUser'
import Products from './Components/AdminComponents/Products/Products'

import PageNotFound from './Components/PageNotFound'
import PrivateRoute from './Common/PrivateRoute'
import PublicRoute from './Common/PublicRoute'
import ProtectedRoute from './Common/ProtectedRoute'

const Root = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <HomeLogin />
          </PublicRoute>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/manage-users"
        element={
          <ProtectedRoute>
            <UserList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/add-user"
        element={
          <ProtectedRoute>
            <AddUser />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/manage-products"
        element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
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
