import React, { useState } from 'react'
import FixedContent from './FixedContent'
import { connect } from 'react-redux'

const Layout = (props) => {
  const [isOpen, setIsopen] = useState(false)

  const handleNavbar = async (open) => {
    setIsopen(open)
  }

  const loggedInUser = localStorage.getItem('usertoken')

  return (
    <div className={isOpen ? 'mainWrapper' : ''}>
      {loggedInUser && <FixedContent NavbarstatusPass={handleNavbar} />}
      <div className="corporate-wrapper">{props.children}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: state.isUserLoggedIn
  }
}

export default connect(mapStateToProps, null)(Layout)
