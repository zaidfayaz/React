import React from 'react'

function ListRendering() {
    const names = ['Zaid', 'Iqu', 'Faizan']
    const persons = [{
        Id: 1,
        Name: 'Zaid',
        Age: 27,
        Skill: 'FrontEnd',
    },
    {
        Id: 2,
        Name: 'Iqu',
        Age: 28,
        Skill: 'React',
    },
    { 
        Id: 3,
        Name: 'Haseeb',
        Age: 31,
        Skill: 'Fullstack',
    }]
    const personList = persons.map(person => <h2>IMy name is{person.name}</h2>)
    return (
        <div>
            {
                names.map(name => <h2>{name}</h2>)
            }
        </div>
    )
}

export default ListRendering
