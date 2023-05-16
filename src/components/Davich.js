import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validator from './Validator';
import { FaPowerOff } from 'react-icons/fa';
import 'styles/Project_common.scss';
import video from '../videos/davich_pc.mp4';

function Davich() {
  const [openValidator, setOpenValidator] = useState(false);

  const body = document.querySelector('body');
  const onValidClick = () => {
    setOpenValidator(true);
    body.style.overflowY = `hidden`;
  }

  const valid_davich = "valid_davich";

  const navigate = useNavigate();
  const pcRef = useRef();
  const onCloseClick = () => {
    pcRef.current.style.animationName = `frame_ani2`;
    pcRef.current.style.animationDuration = `1s`;
    pcRef.current.style.animationTimingFunction = `ease`;
    pcRef.current.style.animationDelay = `0s`;
    navigate('/project');
  }

  return (
    <div className='projects_container' ref={pcRef}>
      <div className='pc_close_btn' onClick={onCloseClick}>
        <FaPowerOff />
        <span>Power Off</span>
      </div>
      {openValidator && (
        <Validator setOpenValidator={setOpenValidator} className={valid_davich} />
      )}

      <div className='projects_background bg_davich'></div>
      <div className='projects_video'>
        <div className='video_mockup'>
          <img src={require('../images/mockup/iMac.png')} alt=''></img>
          <div className='video_screen'>
            <video autoPlay muted loop preload>
              <source src={video}></source>
            </video>
          </div>
        </div>
      </div>
      <div className='projects_inner'>
        <div className='pj_inner_header'>
          <ul>
            <li onClick={onValidClick}>유효성 검사</li>
            <li><Link target={'_blank'} to={'https://devhwcho.github.io/davich/'}>GitHub Page</Link></li>
          </ul>
        </div>
        <div className='pj_top'>
          <div className='pj_icons'>
            <img src={require('../images/icon_html5.png')} className='pj_img' alt='' />
            <img src={require('../images/icon_css3.png')} className='pj_img' alt='' />
            <img src={require('../images/icon_js.png')} className='pj_img' alt='' />
          </div>
          <div className='pj_header'>
            <p className='pj_headline'>Responsive Web</p>
            <h2 className='pj_h2'>DAVICH</h2>
          </div>
          <div className='pj_items'>
            <ul>
              <li>작업기간 : <span className='pj_span'>2023-03 → 2023-04</span></li>
              <li>기여도 : <span className='pj_span'>100%</span></li>
              <li>사용언어 : <span className='pj_span'>HTML5</span>, <span className='pj_span'>CSS3</span>, <span className='pj_span'>JavaScript</span></li>
            </ul>
          </div>
        </div>
        <div className='pj_content_container'>
          <h3 className='pj_h3'># 프로젝트 개요</h3>
          <p className='pjc_text'>기존 페이지가 반응형으로 제작되어 있지 않아 <strong>자체적으로 반응형 웹 페이지로 변경/제작</strong></p>
          <h3 className='pj_h3'># 주요 업무</h3>
          <p className='pjc_text'>CSS의 <strong>Flexible Box</strong> 기능을 통한 <strong>자동 변경 레이아웃</strong> 구현</p>
          <p className='pjc_text'>
            Flexible Box의 부족한 부분은 <strong>Media Query</strong>를 통해 세부 설정<br/>
            (해상도가 변경되었을 때 레이아웃이 깨지지 않도록 <strong>부드러운 화면 전환 구현 목표</strong>)
          </p>
          <p className='pjc_text'>해상도 변경에 맞는 Header의 <strong>주 메뉴 모양 변경</strong>과 그에 맞는 <strong>별도의 JavaScript 구현</strong></p>
          <p className='pjc_text'>JavaScript 기능을 활용하여 <strong>메인 배너 영상 길이에 맞춰 자동으로 다음 영상이 재생</strong>되도록 구현</p>
          <p className='pjc_text'>기존 페이지가 PC페이지와 모바일 페이지를 각각 제작하여 운영하는 반면, <strong>반응형 웹페이지로 제작</strong>하여 별도로 제작/운영하지 않아 리소스 절감 가능</p>
          <p className='pjc_text'><strong>웹 표준, 웹 접근성 준수</strong>하여 제작, HTML/CSS/W3C 유효성 검사 통과 완료 </p>
        </div>
      </div>
    </div>
  )
}

export default Davich
