import React, { useRef } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'styles/Contact.scss';

function Contact(props) {
  const tRef = useRef();
  const contactConRef = useRef();
  const onContactToggle = () => {
    contactConRef.current.style.animationName = `contactFade2`;
    contactConRef.current.style.animationDuration = `1s`;
    contactConRef.current.style.animationTimingFunction = `ease`;
    contactConRef.current.style.animationDelay = `0.5s`;
    tRef.current.classList.add('on');
    setTimeout(function() {
      props.setOpenContact(false);
    }, 1400);
  }

  return (
    <div className='contact_container' ref={contactConRef}>
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
            <h3 className='cd_h3'>GitHub</h3>
            <span className='cd_text'><Link target={'_blank'} to={'https://github.com/DevHWCho'}>https://github.com/DevHWCho</Link></span>
          </div>
          <div className='contact_detail'>
            <h3 className='cd_h3'>e-mail</h3>
            <span className='cd_text'><Link to={'mailto:whgusdnd97@gmail.com'}>whgusdnd97@gmail.com</Link></span>
          </div>
          <div className='contact_detail'>
            <h3 className='cd_h3'>Phone Number</h3>
            <span className='cd_text'>010-4229-8897</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact