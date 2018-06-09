import React from 'react';

import Logo from '../assets/images/logo_small.png';

export default (props) => {
  return (
    <div className='headerContainer'>
      <img className='headerLogo' src={Logo} alt=""/>
    </div>
  )
}