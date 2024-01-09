import React from 'react'

function HeroExErrorBoundary({heroName}) {
    if(heroName === "Joker"){
        throw new Error ('Not a hero')
    }
  return (
    <div>
    hero
      {heroName}
    </div>
  )
}

export default HeroExErrorBoundary
