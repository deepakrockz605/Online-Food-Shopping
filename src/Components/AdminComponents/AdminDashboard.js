import React from 'react'
import { connect } from 'react-redux'

const AdminDashboard = (userData) => {
  return <div className="margin-top-70">AdminDashboard </div>
}

const mapStateToProps = (state) => {
  return {
    userData: state.userReducer.userData
  }
}

export default connect(mapStateToProps, null)(AdminDashboard)
