import React from 'react'
import Hero from './Hero'

const Test1 = () => {
  return (
    <div>

        <Hero superhero='batman' />
        <Hero superhero='superman' />
         {/* <Hero superhero='joker' />  */}
        this line will throw error because we are passing joker as a superHero- and if we are in development it would show us the error on screen and if not! like for user it would send a white blank screen- This is the usecase for Error boundary as after using it! it would send a fallback component and it doesnt unmounts every components - just unmounts the having error component and shows the fallBack UI */
        <p> For better understanding check the code</p>



    </div>
  )
}

export default Test1