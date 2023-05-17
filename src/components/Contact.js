import React, { useEffect } from 'react';
import { FaExclamationTriangle, FaGithub, FaMailBulk, FaMobile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'styles/Contact.scss';

function Contact(props) {
  useEffect(() => {
    const visibleNav = props.visibleNav;
    visibleNav();
  });

  return (
    <div className='contact_container'>
      <div className='contact_header'>
        <div className='header_sub'>
          <p className='headline'>Developer CHO</p>
          <div className='barcode_container'>
            <p className='left_caution'>
              <FaExclamationTriangle />
            </p>
            <p className='barcode'></p>
          </div>
        </div>
        <h2 className='contact_title'>CONTACT</h2>
        <div className='contact_cont_container'>
          <div className='contact_detail'>
            <div className='cd_title'>
              <h3 className='cd_h3'>GitHub</h3>
              <FaGithub />
            </div>
            <span className='cd_text'><Link target={'_blank'} to={'https://github.com/DevHWCho'}>https://github.com/DevHWCho</Link></span>
          </div>
          <div className='contact_detail'>
            <div className='cd_title'>
              <h3 className='cd_h3'>e-mail</h3>
              <FaMailBulk />
            </div>
            <span className='cd_text'><Link to={'mailto:whgusdnd97@gmail.com'}>whgusdnd97@gmail.com</Link></span>
          </div>
          <div className='contact_detail'>
            <div className='cd_title'>
              <h3 className='cd_h3'>Phone Number</h3>
              <FaMobile />
            </div>
            <span className='cd_text'>010-4229-8897</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact