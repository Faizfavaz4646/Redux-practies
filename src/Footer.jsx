import React from 'react';
import { useSelector } from 'react-redux';

function Footer() {
  const color=useSelector(state=>state.color.value)
  return (
    <div style={{border:'solid yellow',textAlign:'center',marginTop:'5px',marginLeft:'5px',marginRight:'5px'}}>
        <p style={{color}}>faizfavaz7@gmail.com</p>
    </div>
  )
}

export default Footer;