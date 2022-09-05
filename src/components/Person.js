import React from 'react'

function Person({person}) {
  return (
    <h2>Hello I'm {person.name}. My age is {person.age} and I know {person.skill}</h2>
  )
}

export default Person