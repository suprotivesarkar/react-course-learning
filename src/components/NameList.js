import React from 'react'
import Person from './Person'

function NameList() {
  const persons = [
    {id:0,
    name: 'Supro',
    age: 23,
    skill: 'ReactJs'
  },
  {
    id:1,
    name: 'Sarkar',
    age: 23,
    skill: 'JavaScript'
  },
  {
    id:2,
    name: 'Aditi',
    age: 22,
    skill: 'Coffee Making'
  }
  ]
  //const personList = person.map(person => <h2>{person.name}</h2>)
  return (
    <div>
    {
      persons.map(person => <Person key={person.id} person={person}/>
      )
    }
    </div>
  )
}

export default NameList