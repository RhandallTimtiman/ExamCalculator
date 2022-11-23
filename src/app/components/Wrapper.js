import React from 'react'

const Wrapper = ({ children }) => {
  const wrapperStyle = {
    width: `100%`,
    height: `100%`,
    background: `black`,
    display: `flex`,
    flexDirection: `column`,
    padding: `1rem`,
  }

  return (
    <div style={wrapperStyle}>{children}</div>
  )
}

export default Wrapper