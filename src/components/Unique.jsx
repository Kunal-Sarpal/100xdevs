import React from 'react'
import { useRecoilValue } from 'recoil'
import { asyncCountAtom, countAtom } from '../Store/atom/CountA'

function Unique() {
    const count  = useRecoilValue(countAtom)
    const notification = useRecoilValue(asyncCountAtom)
  return (
    <>
    
   <div>
        <h1>Information</h1>

        <button>Network {notification.network}</button>
        <button>Jobs {notification.jobs}</button>
        <button>Messaging {notification.messaging}</button>
        <button>Notifications {notification.notifications}</button>
   </div>
    
    </>
  )
}

export default Unique