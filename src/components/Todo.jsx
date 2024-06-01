import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { countAtom, todoAtomFamily } from '../Store/atom/CountA'

function Todo() {
    const [count,setCount] = useRecoilState(countAtom)
    const todo = useRecoilValue(todoAtomFamily(count));
    
  return (
      <div>
        {todo.id}
        {count > 9? (<>{setCount(1)}</>): (<></>)}
        <br />
        {todo.title}
        <br />
        {todo.description}
    </div>
  )
}

export default Todo