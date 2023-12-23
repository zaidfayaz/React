import React from 'react'
import PersonKey from './PersonKey'

function ListRendering() {
    
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
    const personList = persons.map(person => <PersonKey key={person.id} person={person}/> )
    const names = ['Zaid', 'Iqu', 'Faizan', 'Zaid'];
    //rendering the index as a key
    const nameList = names.map((name, index) => <h2 key = {index}> {index} {name} </h2>)
    return <div>
        <div>{personList}</div>
        <div>{nameList}</div>
    </div>
}

export default ListRendering

