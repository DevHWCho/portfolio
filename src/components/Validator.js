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
          <div className='valid_img valid_davich'>
            <img src={require('../images/test/davich_html_test.png')} alt='html validator test' />
            <img src={require('../images/test/davich_W3C-CSS-test.png')} alt='css validator test' />
            <img src={require('../images/test/davich_web_accessibility_test.png')} alt='web accessibility test' />
          </div>
        )}
        
        {props.className === "valid_sem" && (
          <div className='valid_img valid_sem'>
            <img src={require('../images/test/sem_html_test.png')} alt='html validator test' />
            <img src={require('../images/test/sem_W3C-CSS-test.png')} alt='css validator test' />
            <img src={require('../images/test/sem_web_accessibility_test.png')} alt='web accessibility test' />
        </div>
        )}
        {props.className === "valid_cjone" && (
           <div className='valid_img valid_cjone'>
            <img src={require('../images/test/cjone_html_test.png')} alt='html validator test' />
            <img src={require('../images/test/cjone_W3C-CSS-test.png')} alt='css validator test' />
            <img src={require('../images/test/cjone_web_accessibility_test.png')} alt='web accessibility test' />
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
