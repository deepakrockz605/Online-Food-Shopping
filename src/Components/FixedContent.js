import React from 'react'
import Navbar from './Navbar'

const FixedContent = (props) => {
  const OpenValue = (value) => {
    props.NavbarstatusPass(value)
  }

  return (
    <div className="InnerWrapper">
      <div className="container-Home">
        <div className="sse">
          <Navbar Navbarstatus={OpenValue} />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default FixedContent
