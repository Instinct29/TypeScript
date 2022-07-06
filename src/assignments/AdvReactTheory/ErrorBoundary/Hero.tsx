import React from 'react'

type compProps = {
    superhero:string
}

const Hero = (props:compProps) => {
    if(props.superhero === "joker"){
        throw new Error('oops! Not a hero')
    }


  return (
    <div>
        {props.superhero}
    </div>
  )
}

export default Hero;