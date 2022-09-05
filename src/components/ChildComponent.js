import React from 'react'

function ChildComponent(props) {
  return (
    <button onClick={()=>props.greetHandler("Sarkar(childern)")}>Call Parent</button>
  )
}

export default ChildComponent