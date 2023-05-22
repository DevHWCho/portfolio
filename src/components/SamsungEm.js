import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'styles/Project_common.scss';
import Validator from './Validator';
import { FaPowerOff, FaStepBackward, FaStepForward } from 'react-icons/fa';
import video from '../videos/sem_pc.mp4';

function SamsungEm() {
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

  const valid_sem = "valid_sem";

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
          <Link to={'/project/davich'}><FaStepBackward /></Link>
          <span>Prev</span>
        </div>
        <div className='pc_fwd_btn'>
          <Link to={'/project/cjone'}><FaStepForward /></Link>
          <span>Next</span>
        </div>
      </div>
      
      {openValidator && (
        <Validator setOpenValidator={setOpenValidator} className={valid_sem} />
      )}
      <div className='projects_background bg_sem'></div>
      <div className='projects_video sem_video'>
        <div className='video_mockup'>
          <img src={require('../images/mockup/iMac.png')} alt=''></img>
          <div className='video_screen'>
            <video autoPlay loop preload="true" playsInline webkit-playsinline="true" muted>
              <source src={video}></source>
            </video>
          </div>
        </div>
      </div>
      <div className='projects_inner sem_inner' ref={piRef}>
        <div className='pj_top'>
          <div className='pj_header'>
            <p className='pj_headline'>Web Accessibillity & Standard</p>
            <h2 className='pj_h2 sem_title'>SAMSUNG ELECTRO-MECHANICS</h2>
          </div>
          <div className='pj_items'>
            <ul>
              <li>작업기간 : <span className='pj_span'>2023-03 → 2023-04</span></li>
              <li>기여도 : <span className='pj_span'>100%</span></li>
              <li>사용언어 : <span className='pj_span'>HTML5</span>, <span className='pj_span'>CSS3</span>, <span className='pj_span'>JavaScript</span></li>
            </ul>
            <div className='pj_icons sem_icons'>
              <img src={require('../images/icon_html5.png')} className='pj_img' alt='' />
              <img src={require('../images/icon_css3.png')} className='pj_img' alt='' />
              <img src={require('../images/icon_js.png')} className='pj_img' alt='' />
            </div>
          </div>
        </div>
        <div className='pj_content_container'>
        < div className='pj_content_header'>
            <ul>
              <li onClick={onValidClick}>유효성/접근성 검사</li>
              <li><Link target={'_blank'} to={'https://devhwcho.github.io/samsung_electric_renewal/'}>Site Link</Link></li>
            </ul>
          </div>
          <h3 className='pj_h3'># 제작목표</h3>
          <ul className='pjc_text'>
            <li>웹 컨텐츠 접근성 및 웹 표준을 준수하여 제작하는 것을 목표로 진행</li>
          </ul>
          <h3 className='pj_h3'># 주요기술</h3>
          <ul className='pjc_text'>
            <li>CSS의 Hover, 가상요소를 활용한 이미지 추가, Transition 이용한 애니메이션 효과 구현</li>
            <li>JavaScript로 메인 배너 영상 재생, 모달창 토글, 주 메뉴 작동, Top 버튼 작동</li>
            <li>JS + CSS 조합으로 스크롤 값에 맞춰 해당 위치의 컨텐츠에 애니메이션이 작동하도록 구현</li>
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

export default SamsungEm
