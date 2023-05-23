import { FaTimesCircle } from 'react-icons/fa';
import 'styles/Validator.scss';

function Validator(props) {
  console.log(props)
  
  const body = document.querySelector('body');
  const onCloseClick = () => {
    props.setOpenValidator(false);
    body.style.overflowY = `auto`;
  }
  
  return (
    <div className='validator_container'>
      <div className='validator_inner'>
        {props.className === "valid_davich" && (
          <div className='valid_section valid_davich'>

            <div className='valid_group'>
              <h3>W3C 웹 표준 검사</h3>
              <p>└&nbsp;&nbsp;W3C HTML 유효성 검사와 CSS 유효성 검사를 통과하고 웹 표준을 준수하여 프로젝트가 개발되었음을 확인할 수 있습니다.</p>
              <img src={require('../images/test/davich_html_test.png')} alt='html validator test' />
              <img src={require('../images/test/davich_W3C-CSS-test.png')} alt='css validator test' />
            </div>
            
            <div className='valid_group'>
              <h3>WEB ACCESSIBILITY 웹 접근성 검사</h3>
              <p>└&nbsp;&nbsp;Lighthouse 보고서를 통해 웹 접근성 준수하여 준수율 100%로 검사를 통과하였음을 확인할 수 있습니다.</p>
              <img src={require('../images/test/davich_web_accessibility_test.png')} alt='web accessibility test' />
            </div>
            
          </div>
        )}
        
        {props.className === "valid_sem" && (
          <div className='valid_section valid_sem'>

            <div className='valid_group'>
              <h3>W3C 웹 표준 검사</h3>
              <p>└&nbsp;&nbsp;W3C HTML 유효성 검사와 CSS 유효성 검사를 통과하고 웹 표준을 준수하여 프로젝트가 개발되었음을 확인할 수 있습니다.</p>
              <img src={require('../images/test/sem_html_test.png')} alt='html validator test' />
              <img src={require('../images/test/sem_W3C-CSS-test.png')} alt='css validator test' />
            </div>
            
            <div className='valid_group'>
              <h3>WEB ACCESSIBILITY 웹 접근성 검사</h3>
              <p>└&nbsp;&nbsp;Lighthouse 보고서를 통해 웹 접근성 준수하여 준수율 100%로 검사를 통과하였음을 확인할 수 있습니다.</p>
              <img src={require('../images/test/sem_web_accessibility_test.png')} alt='web accessibility test' />
            </div>

        </div>
        )}
        {props.className === "valid_cjone" && (
           <div className='valid_section valid_cjone'>

            <div className='valid_group'>
              <h3>W3C 웹 표준 검사</h3>
              <p>└&nbsp;&nbsp;W3C HTML 유효성 검사와 CSS 유효성 검사를 통과하고 웹 표준을 준수하여 프로젝트가 개발되었음을 확인할 수 있습니다.</p>
              <img src={require('../images/test/cjone_html_test.png')} alt='html validator test' />
              <img src={require('../images/test/cjone_W3C-CSS-test.png')} alt='css validator test' />
            </div>
            
            <div className='valid_group'>
              <h3>WEB ACCESSIBILITY 웹 접근성 검사</h3>
              <p>└&nbsp;&nbsp;Lighthouse 보고서를 통해 웹 접근성 준수하여 준수율 100%로 검사를 통과하였음을 확인할 수 있습니다.</p>
              <img src={require('../images/test/cjone_web_accessibility_test.png')} alt='web accessibility test' />
            </div>

         </div>
        )}
        <div className='valid_close_btn'>
          <FaTimesCircle onClick={() => onCloseClick()} />
        </div>
      </div>
    </div>
  )
}

export default Validator
