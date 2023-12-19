import React from 'react'

// export default function Greet(){
//     return( <div>
//         <h1>Hello Zaid Fayaz</h1>
//     </div>
//     );
// }
//------------------one way-------------------------------
// function Greet(){
//     return <h1>Hello Zaid</h1>
// }
// export default Greet

//------------------2nd way-------------------------------
const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name}! I am a state component, a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default Greet


