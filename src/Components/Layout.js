import React from 'react'
import { connect } from 'react-redux'

const Layout = ({ children, sidebarOpen }) => {
  return (
    <div className={sidebarOpen ? 'mainWrapper' : ''}>
      <div className="corporate-wrapper">{children}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    sidebarOpen: state.cartReducer.sidebarOpen
  }
}

export default connect(mapStateToProps, null)(Layout)
