import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'styles/Project_common.scss';
import Validator from './Validator';
import { FaPowerOff } from 'react-icons/fa';

function SamsungEm() {
  const [openValidator, setOpenValidator] = useState(false);

  const body = document.querySelector('body');
  const onValidClick = () => {
    setOpenValidator(true);
    body.style.overflowY = `hidden`;
  }

  const valid_sem = "valid_sem";

  const navigate = useNavigate();
  const onCloseClick = () => {
    navigate('/project');
  }

  return (
    <div className='projects_container'>
      <div className='pc_close_btn' onClick={onCloseClick}>
        <FaPowerOff />
        <span>Power Off</span>
      </div>
      
      {openValidator && (
        <Validator setOpenValidator={setOpenValidator} className={valid_sem} />
      )}
      <div className='projects_background bg_sem'></div>
      <div className='projects_video'></div>
      <div className='projects_inner'>
        <div className='pj_inner_header'>
          <ul>
            <li onClick={onValidClick}>유효성 검사</li>
            <li><Link target={'_blank'} to={'https://devhwcho.github.io/samsung_electric_renewal/'}>GitHub Page</Link></li>
          </ul>
        </div>
        <div className='pj_top'>
          <div className='pj_icons'>
            <p>My skills</p>
            <img src={require('../images/icon_html5.png')} className='pj_img' alt='' />
            <img src={require('../images/icon_css3.png')} className='pj_img' alt='' />
            <img src={require('../images/icon_js.png')} className='pj_img' alt='' />
          </div>
          <div className='pj_header'>
            <p className='pj_headline'>Web Accessibillity & Standard</p>
            <h2 className='pj_h2 sem_title'>SAMSUNG ELECTRO-MECHANICS</h2>
          </div>
          <div className='pj_items'>
            <ul>
              <li>작업기간 : <span className='pj_span'>2023-00 → 2023-00</span></li>
              <li>기여도 : <span className='pj_span'>100%</span></li>
              <li>사용언어 : <span className='pj_span'>HTML5, CSS3, JavaScript</span></li>
            </ul>
          </div>
        </div>
        <div className='pj_content_container'>
          <div className='pj_scroll_down'>↓ CLICK & SCROLL DOWN</div>
          <h3 className='pj_h3'># 프로젝트 개요</h3>
          <p className='pjc_text'><strong>웹 컨텐츠 접근성 및 웹 표준을 준수</strong>하여 제작하는 것을 목표로 진행</p>
          <h3 className='pj_h3'># 주요 업무</h3>
          <p className='pjc_text'>CSS 기능을 통하여 <strong>리뉴얼 된 삼성전기 홈페이지</strong> 디자인 구현</p>
          <p className='pjc_text'><strong>CSS의 Hover, Transition</strong> 등 각종 Effect를 활용하여 역동적인 화면 구현</p>
          <p className='pjc_text'><strong>JavaScript</strong>를 활용하여 <strong>메인 배너 영상 재생, 모달창 토글, Top 버튼</strong> 등 다양한 기능 구현</p>
          <p className='pjc_text'>웹 표준, 웹 접근성 준수하여 제작, <strong>Html/CSS/W3C 유효성 검사 통과 완료</strong> </p>
        </div>
      </div>
    </div>
  )
}

export default SamsungEm
