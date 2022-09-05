import React from 'react'
import './myStyles.css'

const heading = {
  fontSize: '50px',
  color: 'green'
}
function Stylesheet(props) {
  let style = props.primary? 'primary' : ''
  return (
    <div>
    <h1 className={`${style} font-xl`}>External</h1>
    <h2 style={heading}>Inline</h2>
    <div className="failure">Failure</div>

    </div>
  )
}

export default Stylesheet