import React, { useRef } from 'react';
import { FaPowerOff } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import 'styles/Project_common.scss';

function MovieApp() {
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
      <div className='projects_background bg_movie'></div>
      <div className='projects_video'></div>
      <div className='projects_inner'>
        <div className='pj_inner_header'>
          <ul>
            <li><Link target={'_blank'} to={'https://devhwcho.github.io/mv_app/'}>GitHub Page</Link></li>
          </ul>
        </div>
        <div className='pj_top'>
          <div className='pj_icons pj_2row_icons'>
            <img src={require('../images/icon_html5.png')} className='pj_img' alt='' />
            <img src={require('../images/icon_sass.png')} className='pj_img' alt='' />
            <img src={require('../images/icon_react.png')} className='pj_img' alt='' />
            <img src={require('../images/icon_firebase.png')} className='pj_img' alt='' />
            <img src={require('../images/icon_github_white.png')} className='pj_img' alt='' />
          </div>
          <div className='pj_header'>
            <p className='pj_headline'>React Project</p>
            <h2 className='pj_h2 ma_title'>MOVIE APP</h2>
          </div>
          <div className='pj_items'>
            <ul>
              <li>작업기간 : <span className='pj_span'>2023-04 → 2023-05</span></li>
              <li>기여도 : <span className='pj_span'>100%</span></li>
              <li>사용기술 : <span className='pj_span'>HTML5(JSX)</span>, <span className='pj_span'>Sass</span>, <span className='pj_span'>Styled Components</span>, <span className='pj_span'>React</span>, <span className='pj_span'>Firebase</span>,  <span className='pj_span'>Github Pages</span>, <span className='pj_span'>Axios</span></li>
            </ul>
          </div>
        </div>
        <div className='pj_content_container ma_container'>
          <h3 className='pj_h3'># 프로젝트 개요</h3>
          <p className='pjc_text'>TMDB의 <strong>API 데이터를 추출</strong>하여 영화 정보를 보여주고, <strong>Firebase</strong>를 활용하여 로그인 페이지 및 프로필 페이지 구현 </p>
          <h3 className='pj_h3'># 주요 업무</h3>
          <p className='pjc_text'>React의 Router-Dom 기능을 활용한 <strong>SPA(Single Page Application)</strong> 제작</p>
          <p className='pjc_text'>React의 <strong>JSX 문법 및 SCSS(SASS) 기능</strong>을 활용한 메신져 어플리케이션 디자인</p>
          <p className='pjc_text'>React의 <strong>Axios 라이브러리</strong>를 활용하여 TMDB의 API 불러오기</p>
          <p className='pjc_text'>React의 <strong>Swipe 라이브러리</strong>를 활용하여 이미지 배너에 Swipe 기능 추가</p>
          <p className='pjc_text'><strong>Firebase 인증 서비스</strong>를 활용한 <strong>이메일 및 소셜 로그인 기능</strong> 구현</p>
          <p className='pjc_text'><strong>Hook 함수</strong>(useEffect/useState/useLocation/useNavigate 등) 를 사용해 <strong>데이터 전달 및 관리</strong></p>
        </div>
      </div>
    </div>
  )
}

export default MovieApp
