import {atom, selector} from 'recoil';
import axios from 'axios';

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