import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import 'styles/Project.scss';

function Project() {
  return (
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
            <button type='button' className='pd_button'>DETAIL</button>
            <span className='pd_period'>2023-00 → 2023-00</span>
            <div className='pd_background'></div>
          </div>
          <div className='project_detail'>
            <h3 className='pd_h3'>SAMSUNG EM</h3>
            <p className='pd_p'>Web Accessibillity & Standard</p>
            <button type='button' className='pd_button'>DETAIL</button>
            <span className='pd_period'>2023-00 → 2023-00</span>
            <div className='pd_background'></div>
          </div>
          <div className='project_detail'>
            <h3 className='pd_h3'>CJ ONE</h3>
            <p className='pd_p'>Responsive Web</p>
            <button type='button' className='pd_button'>DETAIL</button>
            <span className='pd_period'>2023-00 → 2023-00</span>
            <div className='pd_background'></div>
          </div>
          <div className='project_detail'>
            <h3 className='pd_h3'>MESSENGER</h3>
            <p className='pd_p'>React Project</p>
            <button type='button' className='pd_button'>DETAIL</button>
            <span className='pd_period'>2023-00 → 2023-00</span>
            <div className='pd_background'></div>
          </div>
          <div className='project_detail'>
            <h3 className='pd_h3'>MOVIE APP</h3>
            <p className='pd_p'>React Project</p>
            <button type='button' className='pd_button'>DETAIL</button>
            <span className='pd_period'>2023-00 → 2023-00</span>
            <div className='pd_background'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
