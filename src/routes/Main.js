import React, { useEffect } from 'react';
import 'styles/Main.scss';

function Main(props) {
  useEffect(() => {
    const inVisibleNav = props.inVisibleNav;
    inVisibleNav();
  })

  return (
    <div className='main_container'>
      <div className='main_inner'>
        <article>
          <h2>Introduction</h2>
        </article>
        <article>
          <h2>Project</h2>
        </article>
        <article>
          <h2>Other</h2>
        </article>
      </div>
    </div>
  )
}

export default Main
