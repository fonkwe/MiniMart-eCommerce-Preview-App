import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cart: [],
  favorites: [], // Initialize favorites as an empty array
};

const cartReducer = (state, action) => {
  
  switch (action.type) {
    case 'ADD':
      const existingIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingIndex !== -1) {
        // Item already in cart → increment quantity
        const newCart = [...state.cart];
        newCart[existingIndex].quantity += 1;
        return { ...state, cart: newCart };
      } else {
        // New item → add with quantity 1
        return { ...state, cart: [...state.cart, action.payload] };
      }

      case 'INCREASE':
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };

        case 'DECREASE':
          return {
            ...state,
            cart: state.cart
              .map(item =>
                item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
              )
              .filter(item => item.quantity > 0),
          };

          case 'REMOVE':
            return {
              ...state,
              cart: state.cart.filter(item => item.id !== action.payload),
            };
      
            case 'TOGGLE_FAVORITE': {
              const isFavorite = state.favorites.some(item => item.id === action.payload.id);
              return {
                ...state,
                favorites: isFavorite
                  ? state.favorites.filter(item => item.id !== action.payload.id)
                  : [...state.favorites, action.payload],
              };
            }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cart: state.cart, favorites: state.favorites, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

