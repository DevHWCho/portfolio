import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import 'styles/Other.scss';

function Other() {
  return (
    <div className='other_container'>
      <div className='other_header'>
        <div className='header_sub'>
          <p className='headline'>Developer CHO</p>
          <div className='barcode_container'>
            <p className='left_caution'>
              <FaExclamationTriangle />
            </p>
            <p className='barcode'></p>
          </div>
        </div>
        <h2 className='other_title'>OTHER - PURE CSS</h2>
        <div className='other_cont_container'>
          <div className='other_detail'>
            <h3 className='od_h3'>도라에몽</h3>
            <p className='od_p'>Pure CSS + Animation</p>
            <button type='button' className='od_button'>DETAIL</button>
            <span className='od_period'>2023-00 → 2023-00</span>
          </div>
          <div className='other_detail'>
            <h3 className='od_h3'>Facebook Emoji</h3>
            <p className='od_p'>Pure CSS + Animation</p>
            <button type='button' className='od_button'>DETAIL</button>
            <span className='od_period'>2023-00 → 2023-00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Other
