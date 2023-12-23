import React from 'react'

function PersonKey({person}) {
  return (
    <div>
    <h2> My name is {person.name}. I am {person.age} years old. I know {person.skill}</h2>
    </div>
  )
}

export default PersonKey
