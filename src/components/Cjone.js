import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validator from './Validator'
import { FaPowerOff, FaStepBackward, FaStepForward } from 'react-icons/fa';
import video from '../videos/cjone_pc.mp4';
import video_tablet from '../videos/cjone_tablet.mp4';
import video_mobile from '../videos/cjone_mobile.mp4';

function Cjone() {
  const [openValidator, setOpenValidator] = useState(false);

  const piRef = useRef();
  const onValidClick = () => {
    setOpenValidator(true);
    document.body.style.overflowY = `hidden`;
    window.scroll({
      top: piRef.current.scrollTop,
      behavior: 'smooth'
    })
  }

  const valid_cjone = "valid_cjone";

  let timeoutId;
  const navigate = useNavigate();
  const pcRef = useRef();
  const onCloseClick = () => {
    document.body.style.overflowY = `auto`;
    pcRef.current.style.animationName = `frame_ani2`;
    pcRef.current.style.animationDuration = `1s`;
    pcRef.current.style.animationTimingFunction = `ease`;
    pcRef.current.style.animationDelay = `0s`;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(()=>{
      navigate('/project');
    },1000);
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
    <div 
      className={`projects_container ${isLandscape ? 'project-landscape-mode' : ''}`} 
      ref={pcRef}
    >
      <div className='pc_close_btn' onClick={onCloseClick}>
        <FaPowerOff />
        <span>Power Off</span>
      </div>
      <div className='pc_slide_btn'>
        <div className='pc_bck_btn'>
          <Link to={'/project/sem'}><FaStepBackward /></Link>
          <span>Prev</span>
        </div>
        <div className='pc_fwd_btn'>
          <Link to={'/project/messenger'}><FaStepForward /></Link>
          <span>Next</span>
        </div>
      </div>

      {openValidator && (
        <Validator setOpenValidator={setOpenValidator} className={valid_cjone} />
      )}

      <div className='projects_background bg_cjone'></div>
      <div className='projects_video'>
        <div className='video_mockup'>
          <img src={require('../images/mockup/iMac.png')} alt=''></img>
          <div className='video_screen'>
            <video autoPlay loop preload='true' playsInline webkit-playsinline="true" muted>
              <source src={video}></source>
            </video>
          </div>
        </div>
        <div className='tablet_mockup'>
          <img src={require('../images/mockup/iPad_pro_12.png')} alt=''></img>
          <div className='tablet_screen'>
            <video autoPlay loop preload='true' playsInline webkit-playsinline="true" muted>
              <source src={video_tablet}></source>
            </video>
          </div>
        </div>
        <div className='mobile_mockup'>
          <img src={require('../images/mockup/8plus.png')} alt=''></img>
          <div className='mobile_screen'>
            <video autoPlay loop preload="true" playsInline webkit-playsinline="true" muted>
              <source src={video_mobile}></source>
            </video>
          </div>
        </div>
      </div>
      <div className='projects_inner' ref={piRef}>
        <div className='pj_logo logo_cjone'>
          <img src={require('../images/logo_cjone.png')} alt='cjone logo' />
        </div>
        <div className='pj_top'>
          <div className='pj_header'>
            <p className='pj_headline'>Responsive Web</p>
            <h2 className='pj_h2'>CJ ONE</h2>
          </div>
          <div className='pj_items'>
            <ul>
              <li>작업기간 : <span className='pj_span'>2023-03 → 2023-04</span></li>
              <li>기여도 : <span className='pj_span'>100%</span></li>
              <li>사용언어 : <span className='pj_span'>HTML5</span>, <span className='pj_span'>CSS3</span>, <span className='pj_span'>JavaScript</span></li>
            </ul>
            <div className='pj_icons'>
              <img src={require('../images/icon_html5.png')} className='pj_img' alt='' />
              <img src={require('../images/icon_css3.png')} className='pj_img' alt='' />
              <img src={require('../images/icon_js.png')} className='pj_img' alt='' />
            </div>
          </div>
        </div>
        <div className='pj_content_container'>
          <div className='pj_content_header'>
            <ul>
              <li onClick={onValidClick}>유효성/접근성 검사</li>
              <li><Link target={'_blank'} to={'https://devhwcho.github.io/cjone/'}>Site Link</Link></li>
            </ul>
          </div>
          <h3 className='pj_h3'># 제작목표</h3>
          <ul className='pjc_text'>
            <li>CJ ONE 홈페이지의 주요 기능들을 구현하고, PC/Tablet/Mobile 환경에 맞는 반응형 웹 페이지 제작 목표</li>
          </ul>
          <h3 className='pj_h3'># 주요기술</h3>
          <ul className='pjc_text'>
            <li>CSS의 Media Query 기능을 활용하여 각 기기에 맞는 반응형 웹 페이지 구현</li>
            <li>CSS의 Hover, Transition 기능 등을 활용하여 역동적인 화면 구현</li>
            <li>JS + CSS 조합으로 자연스러운 애니메이션 적용된 아이콘 구현, 스크롤 값에 따라 자동으로 따라오는 도너츠 모양 배경 이미지 구현</li>
            <li>JavaScript로 오토 배너, 모달창 토글, TOP 버튼, Hover 시 작동되는 설명 문구 구현</li>
            <li>Switch Case문을 사용하여 각 카테고리에 맞게 분류되어 해당되는 내용만 표현되는 기능 추가</li>
            <li>AJAX를 통해 header, footer, main 등으로 html 파일을 나눠 각 페이지에 연결시킴</li>
          </ul>
          <h3 className='pj_h3'># 웹 표준 준수</h3>
          <ul className='pjc_text'>
            <li>웹 접근성 준수하여 제작</li>
            <li>HTML/CSS/W3C 유효성 검사 통과 완료</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cjone
