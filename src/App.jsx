import React, { Suspense } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom } from './Store/atom/CountA'
import Unique from './components/Unique'
import Compo from './components/Compo'

function App() {

  return (
    <div>
      <Compo/>
      <Suspense fallback={"Loading..."}>

      <Unique/>

      </Suspense>
    </div>
  )
}

export default App