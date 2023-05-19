import React, { useEffect, useRef, useState } from 'react';
import { FaPowerOff, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import video from '../videos/messenger.mp4';

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

  // mobile - landscape mode
  const [isLandscape, setIsLandscape] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(orientation: landscape)');
    const handleOrientationChange = (event) => {
      setIsLandscape(event.matches);
    };
    setIsLandscape(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleOrientationChange);
    return () => {
      mediaQuery.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  return (
    <div className={isLandscape ? 'projects_container landscape-mode' : 'projects_container'} ref={pcRef}>
      <div className='pc_close_btn' onClick={onCloseClick}>
        <FaPowerOff />
        <span>Power Off</span>
      </div>
      <div className='pc_slide_btn'>
        <div className='pc_bck_btn'>
          <Link to={'/project/cjone'}><FaStepBackward /></Link>
          <span>Prev</span>
        </div>
        <div className='pc_fwd_btn'>
          <Link to={'/project/movie'}><FaStepForward /></Link>
          <span>Next</span>
        </div>
      </div>

      <div className='projects_background bg_messenger'></div>
      <div className='projects_video mobile_version'>
        <div className='video_mockup'>
          <img src={require('../images/mockup/8plus.png')} alt='' />
          <div className='mobile_only_screen'>
            <video autoPlay loop preload='true' playsInline webkit-playsinline='true' muted>
              <source src={video}></source>
            </video>
          </div>
        </div>
      </div>
      <div className='projects_inner msg_inner'>
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
            <h2 className='pj_h2'>MESSENGER</h2>
          </div>
          <div className='pj_items'>
            <ul>
              <li>작업기간 : <span className='pj_span'>2023-03 → 2023-04</span></li>
              <li>기여도 : <span className='pj_span'>100%</span></li>
              <li>사용기술 : <span className='pj_span'>JSX</span>, <span className='pj_span'>Sass</span>, <span className='pj_span'>React</span>, <span className='pj_span'>Firebase</span>, <span className='pj_span'>Axios</span>, <span className='pj_span'>Gihub Pages</span></li>
            </ul>
          </div>
        </div>
        <div className='pj_content_container'>
          <div className='pj_content_header'>
            <ul>
              <li><Link target={'_blank'} to={'https://devhwcho.github.io/kakao_2023/'}>GitHub Page</Link></li>
            </ul>
          </div>
          <h3 className='pj_h3'># 제작목표</h3>
          <ul className='pjc_text'>
            <li>React와 Firebase를 통해 메신져 형태의 CRUD 가능한 어플리케이션 제작</li>
          </ul>
          <h3 className='pj_h3'># 주요기술</h3>
          <ul className='pjc_text'>
            <li>React의 Router-Dom 기능을 활용한 SPA(Single Page Application) 제작</li>
            <li>JSX 문법 및 SCSS(SASS) 기능을 활용하여 반응형 어플리케이션 디자인</li>
            <li>React의 Axios 라이브러리를 활용하여 FakeAPI 불러오기</li>
            <li>Firebase 인증 서비스를 활용하여 이메일 및 소셜 로그인 기능 구현</li>
            <li>로그인 시 조건에 따라 에러 메시지가 표시되도록 구현</li>
            <li>Firebase와 연동하여 React 앱 내에서 로그인/로그아웃, 채팅방 내 대화 보내기/수정/삭제 기능 추가</li>
            <li>개인 닉네임, 프로필 사진 및 배경 사진 수정/삭제 기능 구현</li>
            <li>현재 로그인한 아이디 데이터만 표시 / 각 채팅방과 각 프로필에 맞는 데이터만 표현되도록 구현</li>
            <li>→ useEffect는 화면을 구현하고 데이터를 유지할 때 주로 사용</li>
            <li>→ useState는 데이터의 변환되는 값들을 전달할 때 주로 사용</li>
            <li>→ useLocation 및 useNavigate는 주소값을 불러와 전달할 때 주로 사용</li>
            <li>→ props를 활용하여 받은 데이터를 다른 컴포넌트 등으로 전달함</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Messenger
