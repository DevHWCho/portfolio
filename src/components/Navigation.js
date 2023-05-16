import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'styles/Navigation.scss';

function Navigation() {
  const location = useLocation();
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const otherRef = useRef(null);
  const contactRef = useRef(null);
  console.log("pathname",location)

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === '/about_me') {
      aboutRef.current.classList.add('active');
      projectRef.current.classList.remove('active');
      otherRef.current.classList.remove('active');
      contactRef.current.classList.remove('active');
    } else if (pathname === '/project') {
      aboutRef.current.classList.remove('active');
      projectRef.current.classList.add('active');
      otherRef.current.classList.remove('active');
      contactRef.current.classList.remove('active');
    } else if (pathname === '/other') {
      aboutRef.current.classList.remove('active');
      projectRef.current.classList.remove('active');
      otherRef.current.classList.add('active');
      contactRef.current.classList.remove('active');
    } else if (pathname === '/contact') {
      aboutRef.current.classList.remove('active');
      projectRef.current.classList.remove('active');
      otherRef.current.classList.remove('active');
      contactRef.current.classList.add('active');
    } else if (pathname === '/') {
      aboutRef.current.classList.remove('active');
      projectRef.current.classList.remove('active');
      otherRef.current.classList.remove('active');
      contactRef.current.classList.remove('active');
    }
  },[location]);
  

  return (
    <div className='nav'>
      <div className='nav_btn' ref={aboutRef}><Link to={'/about_me'}><p>ABOUT ME</p></Link></div>
      <div className='nav_btn' ref={projectRef}><Link to={'/project'}><p>PROJECT</p></Link></div>
      <div className='nav_btn' ref={otherRef}><Link to={'/other'}><p>OTHER</p></Link></div>
      <div className='nav_btn' ref={contactRef}><Link to={'/contact'}><p>CONTACT</p></Link></div>
    </div>
  )
}

export default Navigation