import React from 'react'
import { useSelector } from 'react-redux';
import { countSlice } from './Count/countSlice';

function Header() {
  const color=useSelector(state=>state.color.value)
  const count=useSelector(state=>state.count.value)
  return (
    <div style={{border:'solid',textAlign:'center',marginLeft:'10px',marginRight:'10px',marginTop:'10px'}}>
        <h1 style={{color}}>Redux Header</h1> <h2>Count:{count}</h2>
    </div>
  )
}

export default Header;