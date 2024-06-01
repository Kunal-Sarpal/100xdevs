import React, { Suspense } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom } from './Store/atom/CountA'
import Unique from './components/Unique'
import Compo from './components/Compo'
import Todo from './components/Todo'

function App() {

  return (
    <div>
      <Compo/>
      <Suspense fallback={"Loading..."}>

      <Unique/>
      <Todo/>
       
      </Suspense>
    
    </div>
  )
}

export default App