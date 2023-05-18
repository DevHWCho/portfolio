import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validator from './Validator';
import { FaPowerOff, FaStepForward } from 'react-icons/fa';
import 'styles/Project_common.scss';
import video from '../videos/davich_pc.mp4';
import video_tablet from '../videos/davich_tablet.mp4';
import video_mobile from '../videos/davich_mobile.mp4';

function Davich() {
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

  const valid_davich = "valid_davich";

  const navigate = useNavigate();
  const pcRef = useRef();
  const onCloseClick = () => {
    document.body.style.overflowY = `auto`;
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
      <div className='pc_slide_btn'>
        <div className='pc_fwd_btn'>
          <Link to={'/project/sem'}><FaStepForward /></Link>
          <span>Next</span>
        </div>
      </div>
      {openValidator && (
        <Validator setOpenValidator={setOpenValidator} className={valid_davich} />
      )}

      <div className='projects_background bg_davich'></div>
      <div className='projects_video'>
        <div className='video_mockup'>
          <img src={require('../images/mockup/iMac.png')} alt=''></img>
          <div className='video_screen'>
            <video autoPlay loop preload='true' playsInline muted>
              <source src={video}></source>
            </video>
          </div>
        </div>
        <div className='tablet_mockup'>
          <img src={require('../images/mockup/iPad_pro_12.png')} alt=''></img>
          <div className='tablet_screen'>
            <video autoPlay loop preload='true' playsInline muted>
              <source src={video_tablet}></source>
            </video>
          </div>
        </div>
        <div className='mobile_mockup'>
          <img src={require('../images/mockup/8plus.png')} alt=''></img>
          <div className='mobile_screen'>
            <video autoPlay loop preload='true' playsInline muted>
              <source src={video_mobile}></source>
            </video>
          </div>
        </div>
      </div>
      <div className='projects_inner' ref={piRef}>
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
          <div className='pj_content_header'>
            <ul>
              <li onClick={onValidClick}>유효성 검사</li>
              <li><Link target={'_blank'} to={'https://devhwcho.github.io/davich/'}>GitHub Page</Link></li>
            </ul>
          </div>
          <h3 className='pj_h3'># 제작목표</h3>
          <ul className='pjc_text'>
            <li>해상도 변경 시에도 레이아웃이 깨지지 않는 부드러운 화면 전환 구현 목표</li>
            <li>기존 다비치 안경 사이트는 반응형 웹으로 만들지 않아 직접 반응형 웹으로 제작하여 차별화를 둠 (모바일 웹과 PC 웹을 별도로 제작하지 않아 리소스 절감 가능)
            </li>
          </ul>
          <h3 className='pj_h3'># 주요기술</h3>
          <ul className='pjc_text'>
            <li>CSS의 Flexible Box 기능을 통한 자동 변경 레이아웃 구현</li>
            <li>Media Query를 통해 디테일 설정</li>
            <li>해상도 변경에 맞게 Header의 주 메뉴 모양 변경과 그에 맞는 별도의 JavaScript 구현 (별도의 모바일 메뉴 없이 주 메뉴를 그대로 사용함)
            </li>
            <li>JavaScript로 메인 배너 영상 길이에 맞춰 프로세스바가 작동하며 자동으로 다음 영상 재생되는 오토 배너 구현</li>
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

export default Davich
