import React, { useEffect, useRef, useState } from 'react';
import { FaPowerOff, FaStepBackward } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import 'styles/Project_common.scss';
import video from '../videos/movie.mp4';
import video_tablet from '../videos/movie_tablet.mp4';
import video_mobile from '../videos/movie_mobile.mp4';

function MovieApp() {

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
          <Link to={'/project/messenger'}><FaStepBackward /></Link>
          <span>Prev</span>
        </div>
      </div>
      <div className='projects_background bg_movie'></div>
      <div className='projects_video'>
        <div className='video_mockup'>
          <img src={require('../images/mockup/iMac.png')} alt=''></img>
          <div className='video_screen'>
            <video autoPlay loop preload='true' playsInline webkit-playsinline='true' muted>
              <source src={video}></source>
            </video>
          </div>
        </div>
        <div className='tablet_mockup'>
          <img src={require('../images/mockup/iPad_pro_12.png')} alt=''></img>
          <div className='tablet_screen'>
            <video autoPlay loop preload='true' playsInline webkit-playsinline='true' muted>
              <source src={video_tablet}></source>
            </video>
          </div>
        </div>
        <div className='mobile_mockup'>
          <img src={require('../images/mockup/8plus.png')} alt=''></img>
          <div className='mobile_screen'>
            <video autoPlay loop preload='true' playsInline webkit-playsinline='true' muted>
              <source src={video_mobile}></source>
            </video>
          </div>
        </div>
      </div>
      <div className='projects_inner movie_inner'>
        <div className='pj_top'>
          <div className='pj_header'>
            <p className='pj_headline'>React Project</p>
            <h2 className='pj_h2 ma_title'>MOVIE APP</h2>
          </div>
          <div className='pj_items'>
            <ul>
              <li>작업기간 : <span className='pj_span'>2023-04 → 2023-05</span></li>
              <li>기여도 : <span className='pj_span'>100%</span></li>
              <li>사용기술 : <span className='pj_span'>JSX</span>, <span className='pj_span'>Sass</span>, <span className='pj_span'>Styled Components</span>, <span className='pj_span'>React</span>, <span className='pj_span'>Firebase</span>,  <span className='pj_span'>Github Pages</span>, <span className='pj_span'>Axios</span></li>
            </ul>
            <div className='pj_icons pj_2row_icons'>
              <img src={require('../images/icon_html5.png')} className='pj_img' alt='' />
              <img src={require('../images/icon_sass.png')} className='pj_img' alt='' />
              <img src={require('../images/icon_react.png')} className='pj_img' alt='' />
              <img src={require('../images/icon_firebase.png')} className='pj_img' alt='' />
              <img src={require('../images/icon_github_white.png')} className='pj_img' alt='' />
            </div>
          </div>
        </div>
        <div className='pj_content_container ma_container'>
          <div className='pj_content_header'>
            <ul>
              <li><Link target={'_blank'} to={'https://devhwcho.github.io/mv_app/'}>GitHub Page</Link></li>
            </ul>
          </div>
          <h3 className='pj_h3'># 제작목표</h3>
          <ul className='pjc_text'>
            <li>React를 활용해 TMDB의 API 데이터를 추출하고 필요한 영화 정보들을 표시, Firebase를 활용하여 로그인 및 프로필 기능 추가</li>
          </ul>
          <h3 className='pj_h3'># 주요기술</h3>
          <ul className='pjc_text'>
            <li>React의 Router-Dom 기능을 활용한 SPA(Single Page Application) 제작</li>
            <li>JSX 문법 및 SCSS(SASS) 기능을 활용하여 반응형 어플리케이션 디자인</li>
            <li>React의 Axios를 instance화 하고, 해당 Axios를 연결해 TMDB의 API 데이터 불러오기</li>
            <li>Firebase 인증 서비스를 활용하여 이메일 및 소셜 로그인 기능 구현</li>
            <li>로그인 시 조건에 따라 에러 메시지가 표시되도록 구현</li>
            <li>React의 Swipe 라이브러리를 활용아여 이미지 배너에 Swipe 기능 추가</li>
            <li>Hook 함수 및 props 기능을 활용하여 영화 데이터를 전달하고 관리</li>
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

export default MovieApp
