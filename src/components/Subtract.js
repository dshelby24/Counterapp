import React from 'react'

const Subtract = (props) => {
  const {countDown} = props

  return (
    <div>
      <button onClick = {countDown}>Subtract One</button>
    </div>
  )
}

export default Subtract