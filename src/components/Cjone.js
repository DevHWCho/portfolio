import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validator from './Validator'
import { FaPowerOff } from 'react-icons/fa';

function Cjone() {
  const [openValidator, setOpenValidator] = useState(false);

  const body = document.querySelector('body');
  const onValidClick = () => {
    setOpenValidator(true);
    body.style.overflowY = `hidden`;
  }

  const valid_cjone = "valid_cjone";

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
        <Validator setOpenValidator={setOpenValidator} className={valid_cjone} />
      )}

      <div className='projects_background bg_cjone'></div>
      <div className='projects_video'></div>
      <div className='projects_inner'>
        <div className='pj_inner_header'>
          <ul>
          <li onClick={onValidClick}>유효성 검사</li>
            <li><Link target={'_blank'} to={'https://devhwcho.github.io/cjone/'}>GitHub Page</Link></li>
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
            <h2 className='pj_h2'>CJ ONE</h2>
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
          <p className='pjc_text'>CJ ONE 홈페이지의 주요 기능들을 구현하고, <strong>PC/Tablet/Mobile 환경에 맞는 반응형 웹 페이지</strong> 제작</p>
          <h3 className='pj_h3'># 주요 업무</h3>
          <p className='pjc_text'><strong>CSS의 Media Query</strong> 기능을 활용하여 <strong>각 기기에 맞는 반응형 웹 페이지</strong> 구현</p>
          <p className='pjc_text'><strong>CSS의 Hover, Transition</strong> 등 각종 Effect를 활용하여 역동적인 화면 구현</p>
          <p className='pjc_text'><strong>JavaScript와 CSS Animation</strong> 기능을 조합해 자연스러운 애니메이션이 적용된 아이콘 구현</p>
          <p className='pjc_text'><strong>JavaScript</strong>를 활용하여 <strong>오토 배너, 모달창 토글, Top 버튼</strong> 등 다양한 기능 구현</p>
          <p className='pjc_text'>웹 표준, 웹 접근성 준수하여 제작, <strong>Html/CSS/W3C 유효성 검사 통과 완료</strong> </p>
        </div>
      </div>
    </div>
  )
}

export default Cjone
