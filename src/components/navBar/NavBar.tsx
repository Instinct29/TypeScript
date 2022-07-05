import React from 'react'
import '../../App.css'

const NavBar = () => {
  return (
    <div>

  <header>
  <nav className="navigation container">
        <div className="nav-brand">Assignments</div>
        <ul className="list-non-bullet nav-pills">
            <li className="list-item-inline">
                <a className="link link-active" href='/'>Home</a>
            </li>
            <li className="list-item-inline">
                <a className="link" href="/theory">TheoryQns</a>
            </li>
            <li className="list-item-inline">
                <a className="link" href="/form">FormQns</a>
            </li>
            <li className="list-item-inline">
                <a className="link" href="/hooks">Hooks</a>
            </li>
            <li className="list-item-inline">
                <a className="link" href="/Redux">Redux</a>
            </li>
            <li className="list-item-inline">
                <a className="link" href="/Redux">Advance React Theory</a>
            </li>
        </ul>
    </nav>
  </header>
  
    </div>
  )
}

export default NavBar;