import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import 'styles/Header.scss';

function Header() {
  const headerBtnRef = useRef();
  const onHdBtnClick = () => {
    headerBtnRef.current.classList.toggle('on')
  }

  return (
    <div className='header_container'> 
      <div className='header_text'>
        <Link to={'/'}><h1>PORTFOLIO</h1></Link>
        <p>BY HYUNWOONG CHO</p>
      </div>
      <div className='gnb' ref={headerBtnRef}>
        <div className='gnb_container'>
          <ul>
            <li className='gnb_main'><h2>INTRO</h2>
              <div className='gnb_sub_box'>
                <ul className='gnb_sub_container'>
                  <li className='gnb_sub'>COVER</li>
                  <li className='gnb_sub'>COVER</li>
                </ul>
              </div>
              <div className='gnb_sub_box'>
                <ul className='gnb_sub_container'>
                  <li className='gnb_sub'>INTRODUCTION</li>
                  <li className='gnb_sub'><Link to={'/about_me'}>INTRODUCTION</Link></li>
                </ul>
              </div>
            </li>
            <li className='gnb_main'><h2>PROJECT</h2>
              <div className='gnb_sub_box'>
                <ul className='gnb_sub_container'>
                  <li className='gnb_sub'>DAVICH</li>
                  <li className='gnb_sub'>DAVICH</li>
                </ul>
              </div>
              <div className='gnb_sub_box'>
                <ul className='gnb_sub_container'>
                  <li className='gnb_sub'>SAMSUNG ELECTRO-MECHANICS</li>
                  <li className='gnb_sub'>SAMSUNG ELECTRO-MECHANICS</li>
                </ul>
              </div>
              <div className='gnb_sub_box'>
                <ul className='gnb_sub_container'>
                  <li className='gnb_sub'>CJ ONE</li>
                  <li className='gnb_sub'>CJ ONE</li>
                </ul>
              </div>
              <div className='gnb_sub_box'>
                <ul className='gnb_sub_container'>
                  <li className='gnb_sub'>MESSENGER</li>
                  <li className='gnb_sub'>MESSENGER</li>
                </ul>
              </div>
              <div className='gnb_sub_box'>
                <ul className='gnb_sub_container'>
                  <li className='gnb_sub'>MOVIE APP</li>
                  <li className='gnb_sub'>MOVIE APP</li>
                </ul>
              </div>
            </li>
            <li className='gnb_main'><h2>OTHER</h2>
              <div className='gnb_sub_box'>
                <ul className='gnb_sub_container'>
                  <li className='gnb_sub'>ANIMATION</li>
                  <li className='gnb_sub'><Link to={'/other'}>ANIMATION</Link></li>
                </ul>
              </div>
              <div className='gnb_sub_box'>
                <ul className='gnb_sub_container'>
                  <li className='gnb_sub'>EMOJI</li>
                  <li className='gnb_sub'><Link to={'/other'}>EMOJI</Link></li>
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
