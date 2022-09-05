import React from 'react'

function Greet(props) {
    const {firstName,lastName} = props
  return (
    <div>Hello {firstName} {lastName}</div>
  )
}

export default Greet