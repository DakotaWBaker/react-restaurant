import React from 'react'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top nav">
    <div className="container-fluid">
      <button className="navbar-brand">
       Happy Grillmore
     </button>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className='navButton' onClick={() => props.page('home')}>Home</button>
              
          </li>
          <li className="nav-item">
          <button className='navButton' onClick={() => props.page('about')}>
              About
              </button>
          </li>
          <li className="nav-item">
          <button className='navButton' onClick={() => props.page('menu')}>
              Menu
              </button>
          </li>
          <li className = "nav-item">
          <button className='navButton'>
              Contact Us
              </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  

  
  

  )
}
// mt-2 mt-md-0