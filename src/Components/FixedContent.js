import React from 'react'
import Navbar from './Navbar'

const FixedContent = (props) => {
  return (
    <div className="InnerWrapper">
      <div className="container-Home">
        <div className="sse">
          <Navbar />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default FixedContent
