import { FaExclamationTriangle } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import 'styles/AboutMe.scss';
import Contact from "components/Contact";
import TypingText from "components/TypingText";

function AboutMe(props) {
  const [openContact, setOpenContact] = useState(false);
  const contactClick = () => {
    setOpenContact(true);
  }

  useEffect(() => {
    const visibleNav = props.visibleNav;
    visibleNav();
  },[])

  return (
    <>
    <div className='about_container'>
      <div className='about_header'>
        <div className='header_sub'>
          <p className='headline'>Developer who</p>
          <div className='barcode_container'>
            <p className='left_caution'>
              <FaExclamationTriangle />
            </p>
            <p className='barcode'></p>
          </div>
        </div>
        <h2 className="about_title">노력하고 소통하는 Front-End 개발자</h2>
        <div className='about_cont_container'>
          <div className='about_picture'></div>
          <div className='about_detail'>
            <h3 className="ad_h3"><TypingText /></h3>
            <p className="ad_p">
              Front와 End 사이에서 서로 공감하고 소통할 수 있는 미래의 <strong>Front-End</strong> 개발자 조현웅입니다. 함께 좋은 시너지를 이끌어낼 수 있도록 누구보다 노력하고, 공부하고, 준비하는 개발자를 꿈꾸고 있습니다. 집을 지을 때도 어렷이 함께 협력해 짓는 것처럼 프로젝트 개발에 있어서도 모든 이들과 함께 소통하고 공감하고 성실하게 일할 준비가 되어있습니다. 디테일을 살리는 꼼꼼함으로 프로젝트의 퀄리티를 한층 업그레이드 하겠습니다.
            </p>
            <div className="ad_skills">
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
            <button className="btn_contact" onClick={contactClick}>Contact</button>
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
