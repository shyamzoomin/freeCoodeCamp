import React from 'react'
import logo from '../images/logo.avif'



function Nav() {
  return (
    <div>
        <nav>
            <img src={logo} alt='img'/>
            <h1>FreeCodeCamp</h1>
            <h3 className='course-heading'>Free Certification Courses</h3>
            
        </nav>
    </div>
  )
}

export default Nav