import React, { useEffect, useRef } from 'react';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import 'styles/Main.scss';

function Main(props) {
  const mcRef = useRef();
  const navigate = useNavigate(null);

  const onScrollUpClick = () => {
    if (mcRef.current) {
      mcRef.current.style.transform = `translateY(100vh)`;
      setTimeout(() => {
        navigate('/portfolio');
      }, 500);
      }
    }

  useEffect(() => {
    const inVisibleNav = props.inVisibleNav;
    inVisibleNav();
    mcRef.current.style.animationName = `main_fade`;
    mcRef.current.style.animationDuration = `1s`;
    mcRef.current.style.animationTimingFunction = `ease`;
    mcRef.current.style.animationDelay = `0s`;

    const handWheel = (e) => {
      if (mcRef.current) {
        if (e.deltaY < 0) {
          mcRef.current.style.transform = `translateY(100vh)`;
          setTimeout(() => {
            navigate('/portfolio');
          }, 500);
        }
      }
    }

    window.addEventListener('wheel', handWheel);

    return () => {
      window.removeEventListener('wheel', handWheel);
    }

  })

  return (
    <div className='main_container' ref={mcRef}>
      <div className='main_inner'>
        <div className='main_scroll_up_btn' onClick={onScrollUpClick}><span>Scroll Up or Click</span></div>
        <div className='article_container'>
          <article>
            <h2>Introduction</h2>
            <span className='art_arrow'><FaExternalLinkSquareAlt /></span>
            <span className='art_text'><Link to={'/about_me'}>CLICK</Link></span>
          </article>
          <article>
            <h2>Project</h2>
            <span className='art_arrow'><FaExternalLinkSquareAlt /></span>
            <span className='art_text'><Link to={'/project'}>CLICK</Link></span>
          </article>
          <article>
            <h2>Other</h2>
            <span className='art_arrow'><FaExternalLinkSquareAlt /></span>
            <span className='art_text'><Link to={'/other'}>CLICK</Link></span>
          </article>
        </div> 
      </div>
    </div>
  )
}

export default Main
