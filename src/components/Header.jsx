
import React from 'react'
import { useLayoutEffect } from 'react'
import {gsap} from 'gsap';
import { useState } from 'react';



const Header = () => {
  const [state, setState] = useState()
 
  useLayoutEffect(()=>{
    gsap.from('#header-text',{
     opacity:0, x: 200, duration:3, 
     delay:-2,
     immediateRender: false
     })
  
  },[])

  return (
    <section className='header_container' data-scroll-section>
      <ul className='header_menu'>
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id="header-text">Art Object</h1>
    </section>
  )
}

export default Header