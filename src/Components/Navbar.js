import React from 'react'


//Navbar is done for the website which has Home,About,Service,Contact,Blog.
function Navbar() {
  return (
    <div>
       <div className='navbar'>
       <img src="/Images/logo1.jpg" alt='logo'></img>
        <ul className='nav-links'>
            <a href='#'>Home</a>
            <a href='#about'>About</a>
            <a href='#service'>Service</a>
            <a href='#blog'>Blog</a>
            <a href='#con'>Contact</a>
        </ul>
        <div className='call-back'>

            <a href='#'><h4>Request a call back</h4></a>
        </div>
       </div>
    </div>
  )
}

export default Navbar