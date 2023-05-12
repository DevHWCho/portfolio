import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'styles/Cover.scss';

function Cover() {
  const navigate = useNavigate(null);
  const coverRef = useRef();
  const ca01Ref = useRef();
  const ca02Ref = useRef();
  const ca03Ref = useRef();
  const ca04Ref = useRef();
  const caConRef = useRef();

  useEffect(() => {
    const handleWheel = (e) => {
      if (coverRef.current) {
        if (e.deltaY > 0) {
          coverRef.current.style.transform = `translateY(-100vh)`;
          setTimeout(function() {
            navigate('/about_me');
          }, 2000);
          
        } else if (e.deltaY < 0) {
          coverRef.current.style.transform = `translateY(0)`;
        }
      }
    };

    window.addEventListener('wheel', handleWheel);

    const timeoutId04 = setTimeout(() => {
      if (ca04Ref.current) {
        ca04Ref.current.style.display = 'none';
      }
    }, 2000);
    const timeoutId03 = setTimeout(() => {
      if (ca03Ref.current) {
        ca03Ref.current.style.display = 'none';
      }
    }, 3000);
    const timeoutId02 = setTimeout(() => {
      if (ca02Ref.current) {
        ca02Ref.current.style.display = 'none';
      }
    }, 4000);
    const timeoutId01 = setTimeout(() => {
      if (ca01Ref.current) {
        ca01Ref.current.style.display = 'none';
        caConRef.current.style.zIndex = '-1';
      }
    }, 6000);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(timeoutId04);
      clearTimeout(timeoutId03);
      clearTimeout(timeoutId02);
      clearTimeout(timeoutId01);
    };
  }, [coverRef]);

  return (
    <>
    <div className='ca_container' ref={caConRef}>
      <div className='cover_animation ca01' ref={ca01Ref}></div>
      <div className='cover_animation ca02' ref={ca02Ref}></div>
      <div className='cover_animation ca03' ref={ca03Ref}></div>
      <div className='cover_animation ca04' ref={ca04Ref}></div>
    </div>
    
    <div className='cover_container' ref={coverRef}>
      <div className='cover_inner'>
        <div className='cover_title'>CHO
          <p className='cover_p'>
            공감과 소통, 새로운 도전과 함께하는<br />
            개발자 조현웅입니다.
          </p>
          <div className='circle_icon'>
            <img src={require('images/circle_icon.png')} alt='' />
            <span className='cover_span'>Portfolio</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cover
