import React from 'react';
import 'styles/Project_common.scss';

function Davich() {
  return (
    <div className='projects_container'>
      <div className='projects_video'></div>
      <div className='projects_inner'>
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
              <li>작업기간 : <span className='pj_span'>2023-00 → 2023-00</span></li>
              <li>기여도 : <span className='pj_span'>100%</span></li>
              <li>사용언어 : <span className='pj_span'>HTML5, CSS3, JavaScript</span></li>
            </ul>
          </div>
        </div>
        <div className='pj_content_container'>
          <h3 className='pj_h3'># 프로젝트 개요</h3>
          <p className='pjc_text'>기존 페이지가 반응형으로 제작되어 있지 않아 자체적으로 반응형 웹 페이지로 변경/제작</p>
          <h3 className='pj_h3'># 주요 업무</h3>
          <p className='pjc_text'></p>
        </div>
      </div>
    </div>
  )
}

export default Davich
