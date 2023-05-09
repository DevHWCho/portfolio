import Cjone from 'components/Cjone';
import Davich from 'components/Davich';
import Messenger from 'components/Messenger';
import MovieApp from 'components/MovieApp';
import SamsungEm from 'components/SamsungEm';
import React from 'react';
import 'styles/Main.scss';

function Main() {
  
  return (
    <div className='main_container'>
      <div className='main_header'></div>
      <Davich />
      <SamsungEm />
      <Cjone />
      <Messenger />
      <MovieApp />
    </div>
  )
}

export default Main
