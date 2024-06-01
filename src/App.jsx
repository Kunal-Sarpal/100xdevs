import React, { useContext, useState } from 'react'
import countContext from './Context'
import Compo from './components/Compo';
import Unique from './components/Unique';

function App() {
  const [count, setCount] = useState(1);
  return (

    <>
    <countContext.Provider value={{count,setCount}}>

    <div>App</div>
    <Compo/>
    <Unique/>
    

    </countContext.Provider>
    
    </>
  )
}



export default App