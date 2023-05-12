import Cjone from 'components/Cjone';
import Davich from 'components/Davich';
import Messenger from 'components/Messenger';
import MovieApp from 'components/MovieApp';
import SamsungEm from 'components/SamsungEm';
import React, { useEffect } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'styles/Project.scss';

function Project(props) {
  useEffect(() => {
    const visibleNav = props.visibleNav;
    visibleNav();
  },[]);

  const location = useLocation();

  return (
    <>
    <TransitionGroup className='transition-group'>
      <CSSTransition key={location.pathname} classNames='fade' timeout={900}>
        <Routes location={location}>
          <Route path='/davich' element={<Davich />}></Route>
          <Route path='/sem' element={<SamsungEm />}></Route>
          <Route path='/cjone' element={<Cjone />}></Route>
          <Route path='/messenger' element={<Messenger />}></Route>
          <Route path='/movie' element={<MovieApp />}></Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
    
    <div className='project_container'>
      <div className='project_header'>
        <div className='header_sub'>
          <p className='headline'>Developer CHO</p>
          <div className='barcode_container'>
            <p className='left_caution'>
              <FaExclamationTriangle />
            </p>
            <p className='barcode'></p>
          </div>
        </div>
        <h2 className='project_title'>PROJECT</h2>
        <div className='project_cont_container'>
          <div className='project_detail'>
            <h3 className='pd_h3'>DAVICH 안경</h3>
            <p className='pd_p'>Responsive Web</p>
            <button type='button' className='pd_button'><Link to={'davich'}>DETAIL</Link></button>
            <span className='pd_period'>2023-00 → 2023-00</span>
            <div className='pd_background'></div>
          </div>
          <div className='project_detail'>
            <h3 className='pd_h3'>SAMSUNG EM</h3>
            <p className='pd_p'>Web Accessibillity & Standard</p>
            <button type='button' className='pd_button'><Link to={'sem'}>DETAIL</Link></button>
            <span className='pd_period'>2023-00 → 2023-00</span>
            <div className='pd_background'></div>
          </div>
          <div className='project_detail'>
            <h3 className='pd_h3'>CJ ONE</h3>
            <p className='pd_p'>Responsive Web</p>
            <button type='button' className='pd_button'><Link to={'cjone'}>DETAIL</Link></button>
            <span className='pd_period'>2023-00 → 2023-00</span>
            <div className='pd_background'></div>
          </div>
          <div className='project_detail'>
            <h3 className='pd_h3'>MESSENGER</h3>
            <p className='pd_p'>React Project</p>
            <button type='button' className='pd_button'><Link to={'messenger'}>DETAIL</Link></button>
            <span className='pd_period'>2023-00 → 2023-00</span>
            <div className='pd_background'></div>
          </div>
          <div className='project_detail'>
            <h3 className='pd_h3'>MOVIE APP</h3>
            <p className='pd_p'>React Project</p>
            <button type='button' className='pd_button'><Link to={'movie'}>DETAIL</Link></button>
            <span className='pd_period'>2023-00 → 2023-00</span>
            <div className='pd_background'></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Project
