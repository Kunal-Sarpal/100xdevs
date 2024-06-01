import { createContext } from 'react';

const countContext = createContext({
    count:null,
    setCount: () => {}
}); 
export default countContext;
