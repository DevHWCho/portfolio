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

  const caChar01Ref = useRef();
  const caChar02Ref = useRef();
  const caChar03Ref = useRef();
  const caChar04Ref = useRef();
  console.log(caChar04Ref)

  const caCharConRef = useRef();

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
    
    const restoreCover = setTimeout(() => {
      ca02Ref.current.style.transform = `translateY(0)`;
      ca03Ref.current.style.transform = `translateY(0)`;
      ca04Ref.current.style.transform = `translateY(0)`;
    }, 1400);
    
    const charDisplay04 = setTimeout(() => {
      if (ca04Ref.current) {
        caChar04Ref.current.style.display = `block`;
      }
    },500)
    const charDisplay03 = setTimeout(() => {
      if (ca03Ref.current) {
        caChar03Ref.current.style.display = `block`;
        caChar04Ref.current.style.display = `none`;
      }
    },2000)
    const charDisplay02 = setTimeout(() => {
      if (ca02Ref.current) {
        caChar02Ref.current.style.display = `block`;
        caChar03Ref.current.style.display = `none`;
        caChar04Ref.current.style.display = `none`;
      }
    },3000)
    const charDisplay01 = setTimeout(() => {
      if (ca01Ref.current) {
        caChar01Ref.current.style.display = `block`;
        caChar02Ref.current.style.display = `none`;
        caChar03Ref.current.style.display = `none`;
        caChar04Ref.current.style.display = `none`;
      }
    },4000)

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
        caChar01Ref.current.style.display = `none`;
        caCharConRef.current.style.display = `none`;
      }
    }, 6000);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(timeoutId04);
      clearTimeout(timeoutId03);
      clearTimeout(timeoutId02);
      clearTimeout(timeoutId01);
      clearTimeout(restoreCover);
      clearTimeout(charDisplay04);
      clearTimeout(charDisplay03);
      clearTimeout(charDisplay02);
      clearTimeout(charDisplay01);
    };
  }, [coverRef]);

  return (
    <>
    <div className='ca_char_container' ref={caCharConRef}>
      <div className='cover_char'>
        <div className='cc_unit caChar01'>
          <span className='unit_char' ref={caChar01Ref}>CHO</span>
        </div>
        <div className='cc_unit caChar02'>
          <span className='unit_char' ref={caChar02Ref}>03</span>
        </div>
        <div className='cc_unit caChar03'>
          <span className='unit_char' ref={caChar03Ref}>02</span>
        </div>
        <div className='cc_unit caChar04'>
          <span className='unit_char' ref={caChar04Ref}>01</span>
        </div>
      </div>
    </div>

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
