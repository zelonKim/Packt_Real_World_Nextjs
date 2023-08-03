import { createContext } from 'react'

const cartContext = createContext({
    items: {},
    setItems: () => null,
})
export default cartContext;