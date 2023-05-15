import React, { useRef } from 'react'
import { FaPowerOff } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'

function Messenger() {
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
      <div className='projects_background bg_messenger'></div>
      <div className='projects_video'></div>
      <div className='projects_inner'>
        <div className='pj_inner_header'>
          <ul>
            <li><Link target={'_blank'} to={'https://devhwcho.github.io/kakao_2023/'}>GitHub Page</Link></li>
          </ul>
        </div>
        <div className='pj_top'>
          <div className='pj_icons pj_2row_icons'>
            <p>My skills</p>
            <img src={require('../images/icon_html5.png')} className='pj_img' alt='' />
            <img src={require('../images/icon_sass.png')} className='pj_img' alt='' />
            <img src={require('../images/icon_react.png')} className='pj_img' alt='' />
            <img src={require('../images/icon_firebase.png')} className='pj_img' alt='' />
            <img src={require('../images/icon_github_white.png')} className='pj_img' alt='' />
          </div>
          <div className='pj_header'>
            <p className='pj_headline'>React Project</p>
            <h2 className='pj_h2'>MESSENGER</h2>
          </div>
          <div className='pj_items'>
            <ul>
              <li>작업기간 : <span className='pj_span'>2023-00 → 2023-00</span></li>
              <li>기여도 : <span className='pj_span'>100%</span></li>
              <li>사용기술 : <span className='pj_span'>HTML5(JSX), Sass, React, Firebase, Axios, Gihub Pages</span></li>
            </ul>
          </div>
        </div>
        <div className='pj_content_container'>
          <div className='pj_scroll_down'>↓ CLICK & SCROLL DOWN</div>
          <h3 className='pj_h3'># 프로젝트 개요</h3>
          <p className='pjc_text'><strong>React 및 Firebase</strong>를 통해 각 페이지 구현 및 CRUD 가능한 <strong>서버리스 시스템</strong> 구축</p>
          <h3 className='pj_h3'># 주요 업무</h3>
          <p className='pjc_text'>React의 Router-Dom 기능을 활용한 <strong>SPA(Single Page Application)</strong> 제작</p>
          <p className='pjc_text'>React의 <strong>JSX 문법 및 SCSS(SASS) 기능</strong>을 활용한 메신져 어플리케이션 디자인</p>
          <p className='pjc_text'>React의 <strong>Axios 라이브러리</strong>를 활용하여 fakeAPI 불러오기</p>
          <p className='pjc_text'><strong>Firebase 인증 서비스</strong>를 활용한 <strong>이메일 및 소셜 로그인 기능</strong> 구현</p>
          <p className='pjc_text'>
            Firebase와 연동하여 <strong>로그인 페이지</strong>부터 <strong>로그아웃</strong> 기능, <strong>각 채팅창 내 대화 보내기 및 삭제</strong>
            <br />
            <strong>개인 닉네임, 프로필 사진 및 문구 수정/삭제</strong> 등 CRUD 구현</p>
          <p className='pjc_text'><strong>Hook 함수</strong>(useEffect/useState/useLocation/useNavigate 등) 를 사용해 <strong>데이터 전달 및 관리</strong></p>
        </div>
      </div>
    </div>
  )
}

export default Messenger