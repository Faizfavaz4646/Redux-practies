import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increase_count,decrease_count } from './Count/countSlice';

function Counter() {
  const count=useSelector(state=>state.count.value);
  const dispatch=useDispatch()
  const increment=()=>{
    dispatch(increase_count())
  }
  const decrement=()=>{
    dispatch(decrease_count());

  }
  


  return (
    <div style={{border:'solid red',marginTop:'12px',marginLeft:'50px',width:'550px',height:'150px',textAlign:'center',}}>
        <h2>Count:{count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter;