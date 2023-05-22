import { FaExclamationTriangle } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import 'styles/AboutMe.scss';
import Contact from "components/Contact";
import TypingText from "components/TypingText";

function AboutMe({visibleNav}) {
  const [openContact, setOpenContact] = useState(false);
 
  useEffect(() => {
    visibleNav();
  },[visibleNav]);

  return (
    <>
    <div className='about_container'>
      <div className='about_header'>
        <div className='header_sub'>
          <p className='headline'>Developer who</p>
          <p className="contact_btn"></p>
          <div className='barcode_container'>
            <p className='left_caution'>
              <FaExclamationTriangle />
            </p>
            <p className='barcode'></p>
          </div>
        </div>
        <h2 className="about_title">성장하고 소통하는 Front-End 개발자</h2>
        <div className='about_cont_container'>
          {/* <button className="btn_contact" onClick={contactClick}>Contact</button> */}
          <div className='about_picture'>
            <img src={require('../images/profile/profile.png')} alt="my profile"/>
          </div>
          <div className='about_detail'>
            <h3 className="ad_h3"><TypingText /></h3>
            <div className="ad_p">
              <p>Front와 End 사이에서 함께 성장하고 소통하는 미래의 <strong>Front-End</strong> 개발자 조현웅입니다. 좋은 시너지를 이끌어낼 수 있도록 누구보다 노력하고, 공부하고, 준비하는 개발자를 꿈꾸고 있습니다.&nbsp;&nbsp;<em>#디테일 #성장 #커뮤니케이션</em></p>
              <div className="ad_education">
                <h3 className="edu_title">EDUCATION</h3>
                <h4>이젠아카데미평생교육원</h4>
                <p>UI/UX 웹&앱 디자인 & 프론트엔드 / 2022 - 2023</p>
              </div>
              <div className="ad_skills">
                <h3 className="ability_title">My Abilities</h3>
                <img src={require('../images/icon_html5.png')} alt="" />
                <img src={require('../images/icon_css3.png')} alt="" />
                <img src={require('../images/icon_js.png')} alt="" />
                <img src={require('../images/icon_sass.png')} alt="" />
                <img src={require('../images/icon_react.png')} alt="" />
                <img src={require('../images/icon_firebase.png')} alt="" />
                <img src={require('../images/icon_github_white.png')} alt="" />
                <img src={require('../images/icon_figma.png')} alt="" />
                <img src={require('../images/icon_ps.png')} alt="" />
                <img src={require('../images/icon_ai.png')} alt="" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    {openContact && (
      <Contact setOpenContact={setOpenContact} />
    )}
    </>
  )
}

export default AboutMe
