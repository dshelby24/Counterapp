import React from 'react'

const Add = (props) => {
  const {countUp} = props

  return (
    <div>
      <button onClick = {countUp}>Add One</button>
    </div>
  )
}

export default Add