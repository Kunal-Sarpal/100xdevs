import React, { useContext } from 'react'
import countContext from '../Context';

function Compo(){
    const {count ,setCount} = useContext(countContext);
    return (
      <>
      <div>This is a: {count}</div>
      <button onClick={()=>setCount(count+1)}>Click</button>
      </>
    )
  }
export default Compo