import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  decimalObject: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);


  return (
    <GlobalContext.Provider value={{
      decimalObject: state.decimalObject,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}