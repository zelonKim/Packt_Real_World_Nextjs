/* import { useContext } from "react";
import cartContext from "./cartContext";

function ProductCard({ id, name, price, picture }) {
    const { setItems, items } = useContext(cartContext) // link both 'setItems' and 'items' from _app.js page to ProductCard component
    // when call 'setItems' -> will be updating the global 'items' object & will be propagated to all the components living under the same context and linked to the same global state

    const productAmount = id in items ? items[id] : 0;

    const handleAmount = (action) => {
        if (action === 'increment') {
            const newItemAmount = id in items ? items[id] + 1 : 1;
            setItems({...items, [id]: newItemAmount })
        }
        if (action === 'decrement') {
            if (items?.[id] > 0) {
                setItems({...items, [id]: items[id] -1 })
            }
        }
    }

    return (
      <div className="bg-gray-200 p-6 rounded-md">
        <div className="relative 100% h-40 m-auto">
          <img src={picture} alt={name} className="object-cover" />
        </div>
        <div className="flex justify-between mt-4">
          <div className="font-bold text-l"> {name} </div>
          <div className="font-bold text-l text-gray-500"> ${price} per kg </div>
        </div>
        <div className="flex justify-between mt-4 w-2/4 m-auto">
          <button
            className="pl-2 pr-2 bg-red-400 text-white rounded-md"
            disabled={productAmount === 0}
            onClick={() => handleAmount('decrement') }>
            -
          </button>
          <div>{productAmount}</div>
          <button
            className="pl-2 pr-2 bg-green-400 text-white rounded-md"
            onClick={() => handleAmount('increment')}>
            +
          </button>
        </div>
      </div>
    );
  }
  
  export default ProductCard; */

  ///////////////////

import { useDispatch, useSelector, shallowEqual } from 'react-redux'

function useGlobalItems() {
    return useSelector((state) => state, shallowEqual)
}

function ProductCard({ id, name, price, picture }) {
    const dispatch = useDispatch()
    const items = useGlobalItems()
    const productAmount = items?.[id] ?? 0;

    return (
      <div className="bg-gray-200 p-6 rounded-md m-auto">

        <div className="flex justify-between mt-4 w-2/4 m-auto">
        <button className="pl-2 pr-2 bg-red-400 text-white rounded-md"
            disabled={productAmount === 100}
            onClick={() => dispatch({ type: 'DECREMENT', id }) }>
            -
        </button>

        <div>{productAmount}</div>

        <button className="pl-2 pr-2 bg-green-400 text-white rounded-md"
            onClick={() => dispatch({ type: 'INCREMENT', id }) }>
            +
        </button>
        </div>

        <div className="flex justify-between m-auto">
          <div className="font-bold text-l"> {name} </div>
          <div className="font-bold text-l text-gray-500"> ${price} per kg </div>
        </div>

        <div className="relative 100% h-40 ">
        <img src={picture} alt={name} className="object-cover" />
        </div>

      </div>
    );
  }
  
  export default ProductCard;