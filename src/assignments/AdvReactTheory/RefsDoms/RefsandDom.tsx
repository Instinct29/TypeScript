import React from 'react'
import NavBar from '../../../components/navBar/NavBar'


const RefsandDom = () => {
  return (
    <div>
      <NavBar />
      <p>Refs and dom-</p>
      <p>Refs are basically references for the input field</p>
      <p>Refs provide a way to access DOM nodes or React elements created in the render method.</p>
      <p>Dom is document object model - The DOM (Document Object Model) represents the web page as a tree structure. Any piece of HTML that we write is added as a node, to this tree.</p>
      <p>With JavaScript, we can access any of these nodes (HTML elements) and update their styles, attributes, and so on. This means that the DOM enables JavaScript to access and modify the web page easily.</p>
      </div>
  )
}

export default RefsandDom