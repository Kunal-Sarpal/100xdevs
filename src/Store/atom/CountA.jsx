import {atom, atomFamily, selector} from 'recoil';
import axios from 'axios';
import todos from '../../TODOS';

export const countAtom = atom({
    key: 'countAtom',
    default: 1
})

export const asyncCountAtom = atom({
    key: 'asyncCountAtom',
    default: selector({
        key: 'countAtom1',
        get: async ()=>{
            const res = await axios.get('https://sum-server.100xdevs.com/notifications');

            return res.data;
        }
    })

})

export const todoAtomFamily = atomFamily({
    key: 'todoAtomFamily',
    default: (id)=>{
        return todos.find(x => x.id === id)
    }
})