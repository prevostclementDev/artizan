import { createContext, useContext, useEffect, useReducer } from 'react'
import { loginApi, registerApi } from '../services/api'
import { toast } from 'react-toastify'

const CartContext = createContext()

const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  ADD_QUANTITY: 'ADD_QUANTITY',
  SET_QUANTITY: 'SET_QUANTITY',
  REMOVE_ITEM: 'REMOVE_ITEM',
  RESET: 'RESET',
}

const initialState = {}

/**
 * @param prevState Etat précédent l'action
 * @param action Action pour mettre à jour l'état
 */
const cartReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {
        ...prevState,
        [action.data.id] : {
          name : action.data.name,
          price : action.data.price,
          quantity : 1
        }
      }
    case actionTypes.ADD_QUANTITY:
      return {
        ...prevState,
        [action.data.id] : {
          ...prevState[action.data.id],
          quantity : prevState[action.data.id].quantity + 1
        }
      }
    case actionTypes.SET_QUANTITY:
      return {
        ...prevState,
        [action.data.id] : {
          ...prevState[action.data.id],
          quantity : action.data.quantity
        }
      }
    case actionTypes.REMOVE_ITEM:
      return {
        ...action.data.newState,
      }
    case actionTypes.RESET:
      return {}
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const cartFactory = (dispatch, state) => ({

  setQuantity(id,quantity) {
    dispatch({ type : actionTypes.SET_QUANTITY, data: {
        id : id,
        quantity : quantity
      } })
  },

  addItemsInCart(id,name,price) {

    if ( state[id] ) {

      dispatch({ type : actionTypes.ADD_QUANTITY, data: {
        id : id,
      } })

    } else {

      dispatch({ type : actionTypes.ADD_ITEM, data: {
          id : id,
          name: name,
          price : price,
      } })

    }

  },

  removeItemInCart(id){

    const { [id] : removeItem, ...newState } = state

    dispatch({ type : actionTypes.REMOVE_ITEM, data: {
        newState : newState
      } })

  }

})

const CartProvider = ({ children }) => {
  const savedState = window.localStorage.getItem('cart')
  const _initialState = savedState ? JSON.parse(savedState) : initialState

  const [state, dispatch] = useReducer(cartReducer, _initialState)

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(state))
  }, [state])

  return (
    <CartContext.Provider value={{ state, ...cartFactory(dispatch, state) }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside an <CartProvider>')
  return context
}

export {
  CartProvider,
  useCart
}
