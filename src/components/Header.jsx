
import React from 'react'
import { useEffect } from 'react'
import gsap from 'gsap';
import { useState } from 'react';




const Header = () => {

  const [state, setState] = useState()
 
  useEffect(() => {
    
  }, []);

  return (
    <section className='header_container' data-scroll-section  >
      <h1>hola</h1>
      <h2>mundo</h2>
      <ul className='header_menu'>
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id="header-text" >Art Object</h1>
    </section>
  )
}

export default Header