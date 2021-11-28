import React, { createContext, useContext, useReducer } from 'react';

// Prepares the Data Layer using createContext() a library function of react.
export const StateContext = createContext();

// Wrap our app and provide data layer access to all the components.
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value = { useReducer(reducer, initialState)}>
        { children }
    </StateContext.Provider>
);

// Pull the data from the Data Layer.
export const useStateValue = () => useContext( StateContext );