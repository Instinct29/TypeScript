import React from 'react'
import NavBar from '../../../components/navBar/NavBar'


const StrictMode = () => {
  return (
    <div>
      <NavBar />
      <p>StrictMode is a React Developer Tool primarily used for highlighting possible problems in a web application. It activates additional deprecation checks and warnings for its child components. One of the reasons for its popularity is the fact that it provides visual feedback (warning/error messages) whenever the React guidelines and recommended practices are not followed. Just like the React Fragment, the React StrictMode Component does not render any visible UI. </p>
      <a className='link link-secondary' href='https://www.geeksforgeeks.org/what-is-strictmode-in-react/'>Doc</a>
      </div>
  )
}

export default StrictMode