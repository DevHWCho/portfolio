import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import 'styles/Header.scss';

function Header(props) {
  console.log("hpppppp",props)
  const headerBtnRef = useRef();
  const headerOutRef = useRef();

  const onHdBtnClick = () => {
    headerBtnRef.current.classList.toggle('on');
    headerOutRef.current.classList.remove('on');
  }
  
  const onHdOutClick = () => {
    headerBtnRef.current.classList.remove('on');
    headerOutRef.current.classList.add('on');
  }

  const onMenuClick = () => {
    headerBtnRef.current.classList.remove('on');
    headerOutRef.current.classList.add('on');
    const inVisibleNav = props.inVisibleNav;
    inVisibleNav();
  }
  const onNavVisibleClick = () => {
    headerBtnRef.current.classList.remove('on');
    headerOutRef.current.classList.add('on');
    const visibleNav = props.visibleNav;
    visibleNav();
  }

  // 휴대폰 landscape 모드
  const [isLandscape, setIsLandscape] = useState(window.orientation === 90 || window.orientation === -90);
  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.orientation === 90 || window.orientation === -90);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isLandscape]);

  return (
    <div className='header_container'> 
      <div className='header_outside on' ref={headerOutRef} onClick={onHdOutClick}></div>
      <div className='header_text'>
        <Link to={'/'} onClick={onMenuClick}><h1>PORTFOLIO</h1></Link>
        <p>BY HYUNWOONG CHO</p>
      </div>
      <div className={`gnb ${isLandscape ? 'gnb-landscape-mode' : ''}`} ref={headerBtnRef}>
        <div className='gnb_container'>
          <ul>
            <li className='gnb_main'><h2>INTRO</h2>
              <div className='gnb_sub_box'>
                <ul className='gnb_sub_container'>
                  <li className='gnb_sub'>COVER</li>
                  <li className='gnb_sub'><Link to={'/portfolio'} onClick={onMenuClick}>COVER</Link></li>
                </ul>
              </div>
              <div className='gnb_sub_box'>
                <ul className='gnb_sub_container'>
                  <li className='gnb_sub'>INTRODUCTION</li>
                  <li className='gnb_sub'><Link to={'/about_me'} onClick={onNavVisibleClick}>INTRODUCTION</Link></li>
                </ul>
              </div>
            </li>
            <li className='gnb_main'><h2><Link to={'/project'} onClick={onNavVisibleClick}>PROJECT</Link></h2>
              <div className='gnb_sub_box'>
                <ul className='gnb_sub_container'>
                  <li className='gnb_sub'>DAVICH</li>
                  <li className='gnb_sub'><Link to={'/project/davich'} onClick={onNavVisibleClick}>DAVICH</Link></li>
                </ul>
              </div>
              <div className='gnb_sub_box'>
                <ul className='gnb_sub_container'>
                  <li className='gnb_sub'>SAMSUNG ELECTRO-MECHANICS</li>
                  <li className='gnb_sub'><Link to={'/project/sem'} onClick={onNavVisibleClick}>SAMSUNG ELECTRO-MECHANICS</Link></li>
                </ul>
              </div>
              <div className='gnb_sub_box'>
                <ul className='gnb_sub_container'>
                  <li className='gnb_sub'>CJ ONE</li>
                  <li className='gnb_sub'><Link to={'/project/cjone'} onClick={onNavVisibleClick}>CJ ONE</Link></li>
                </ul>
              </div>
              <div className='gnb_sub_box'>
                <ul className='gnb_sub_container'>
                  <li className='gnb_sub'>MESSENGER</li>
                  <li className='gnb_sub'><Link to={'/project/messenger'} onClick={onNavVisibleClick}>MESSENGER</Link></li>
                </ul>
              </div>
              <div className='gnb_sub_box'>
                <ul className='gnb_sub_container'>
                  <li className='gnb_sub'>MOVIE APP</li>
                  <li className='gnb_sub'><Link to={'/project/movie'} onClick={onNavVisibleClick}>MOVIE APP</Link></li>
                </ul>
              </div>
            </li>
            <li className='gnb_main'><h2>OTHER</h2>
              <div className='gnb_sub_box'>
                <ul className='gnb_sub_container'>
                  <li className='gnb_sub'>ANIMATION</li>
                  <li className='gnb_sub'><Link to={'/other'} onClick={onNavVisibleClick}>ANIMATION</Link></li>
                </ul>
              </div>
              <div className='gnb_sub_box'>
                <ul className='gnb_sub_container'>
                  <li className='gnb_sub'>EMOJI</li>
                  <li className='gnb_sub'><Link to={'/other'} onClick={onNavVisibleClick}>EMOJI</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className='gnb_bottom'>
          <div className='header_btn_container' onClick={onHdBtnClick}>
              <div className='header_btn hb_01'></div>
              <div className='header_btn hb_02'></div>
              <div className='header_btn hb_03'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
