import React from 'react'

function ListRendering() {
   // const names = ['Zaid', 'Iqu', 'Faizan']
    const persons = [{
        id: 1,
        name: 'Zaid',
        age: 27,
        skill: 'FrontEnd',
    },
    {
        id: 2,
        name: 'Iqu',
        age: 28,
        skill: 'React',
    },
    { 
        id: 3,
        name: 'Haseeb',
        age: 31,
        skill: 'Fullstack',
    }]
    const personList = persons.map(person => <h2>My name is {person.name}. I am {person.age} years old. I know {person.skill}</h2>)
    return <div> {personList} </div>
}

export default ListRendering
