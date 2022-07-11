import React from 'react'
import NavBar from '../../../components/navBar/NavBar'
import Test1 from './Test1'
import ErrorBoundary from './ErrorBoundary'
  

const Index = () => {
  return (
    <div>
      <ErrorBoundary> 
      <NavBar />
      <p>Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods,</p>
      <Test1 />
       </ErrorBoundary>
    </div>
  )
}

export default Index;