import React, { useContext } from 'react'
import countContext from '../Context'

function Unique() {
    const {count} = useContext(countContext)
  return (
    <>
    {count%2 ? (<><div style={{position:'absolute'}}>
        <li>HELLO</li>
        <li>HELLO</li>
        <li>HELLO</li>
        <li>HELLO</li>
        <li>HELLO</li>
        <li>HELLO</li>
        <li>HELLO</li>
        <li>HELLO</li>
        <li>HELLO</li>
        <li>HELLO</li>
    </div></>):(<><div>{"FUCK YOU"}</div></>)}
    
    
    
    </>
  )
}

export default Unique