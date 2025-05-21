import React from 'react'
import Counter from './Counter';
import Aside from './Aside';

function Main1() {
  return (
    <div style={{display:'flex',justifyContent:'space-between',border:'solid blue',marginTop:'10px',height:'400px',marginRight:'50px',marginLeft:'50px',}}>
          <Counter />
         <Aside />
    </div>
  )
}

export default Main1;