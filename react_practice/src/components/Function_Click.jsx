import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log("button clicked");
    }
    return (
        <div>
            <button onClick={clickHandler}>Functional Component Click Handler - Click</button>
        </div>
    )
}

export default FunctionClick
