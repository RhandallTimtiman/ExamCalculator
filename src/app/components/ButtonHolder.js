import React from 'react'

const ButtonHolder = ({ children }) => {
  const holderStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(4, 1fr)`,
    gap: `.5rem`,
  }
  return (
    <div style={holderStyle}>{children}</div>
  )
}

export default ButtonHolder