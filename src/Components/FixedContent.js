import React from 'react'
import Navbar from './Navbar'

const FixedContent = ({ userData }) => {
  return (
    <div className="InnerWrapper">
      <div className="container-Home">
        <div className="sse">
          <Navbar userData={userData} />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default FixedContent
