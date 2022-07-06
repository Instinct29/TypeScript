import React from 'react'
import NavBar from '../../../components/navBar/NavBar'


const Context = () => {
  return (
    <div> 
      <NavBar />
      <p>
      -context is designed to share data that can be considered “global” for a tree of React components
      <br />
      -context provides a way to pass data through the component tree without having to pass props down manually at every level
      </p>
      <p>
      React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
      <br />
      -Basic Idea of context Api, here we make global data which is then accessable to all child component, it removes the problem of prop drilling.

      <br />

      Syntax-
      <br />

      export const assignmentContext = React.createContext(); // inside of main App component
      return(
        {/* <assignmentContext.provider value="manthan">
           <div>
               ........content
           </div>
        </assignmentContext> */}
      )


      import (useContext) from "react"; we use this in components where we need use the variable;




      </p>
      </div>
  )
}

export default Context