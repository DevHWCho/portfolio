import React, { useEffect } from 'react'

function Main(props) {
  useEffect(() => {
    const inVisibleNav = props.inVisibleNav;
    inVisibleNav();
  })

  return (
    <div className='main_container'>
      
    </div>
  )
}

export default Main
