import React from 'react'

//Simple footer is created, by clicking the links will take us back to requeired section
function Footer() {
  return (
    <footer className='footer'>
        <ul className='nav-links'>
            <a href='#'>Home</a>
            <a href='#about'>About</a>
            <a href='#service'>Service</a>
            <a href='#blog'>Blog</a>
            <a href='#con'>Contact</a>
        </ul>
        <h5>&#169; 2022 copyright all right reserved
</h5>        
</footer>
  )
}

export default Footer