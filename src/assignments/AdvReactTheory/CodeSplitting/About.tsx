import React from 'react'

const About = () => {
  return (
    <div>
      About us Page!! - Demonstration of code splitting
      <p>
        Code splitting is basically splitting of code according to our need!
        <br></br>
        Calling them when we want-
        <br />
        And if we dont want load some particular components while loading the app then we can use lazy and suspense there !
        <br />
        The only drawback about code splitting is that you can only use it in client side rendering.

        Both the above techniques won’t work during server side rendering when it comes to React .  This is the reason why the React team recommends using loadable components for code splitting in the server.
      </p>
    </div>
  )
}

export default About