import React, { useContext } from 'react'
// import countContext from '../Context';
import { useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from '../Store/atom/CountA';

function Compo(){
    const [count, setCount]  = useRecoilState(countAtom);
    return (
      <>
      <button onClick={()=>setCount(count+1)}>Click</button>
      <div>This is a: {count}</div>
      </>
    )
  }
export default Compo