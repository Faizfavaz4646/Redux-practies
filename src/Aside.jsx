import React, { useState } from 'react';
import randomColor from 'randomcolor';
import { useSelector,useDispatch } from 'react-redux';
import { change_color } from './Redux/color/colorSlice';

function Aside() {
  const color=useSelector(state=>state.color.value);
  const dispatch=useDispatch()
  const changeColor=()=>{
    dispatch(change_color({
      color:randomColor()
    }))
  }
   

    
  return (
    <div style={{border:'solid green',marginTop:'12px',marginRight:'50px',width:'550px',height:'150px',textAlign:'center',}}>
        <h2 style={{color}}>Aside</h2>
        <button onClick={changeColor} >change color</button>
    </div>
  )
}

export default Aside;