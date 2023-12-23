import React from 'react'

function InlineStyling() {
    const heading = {
        fontSize : '50px',
        color : 'blue'
    }
  return (
    <div>
        <h1 style = {heading}>Inline Styling</h1>
    </div>
  )
}

export default InlineStyling
