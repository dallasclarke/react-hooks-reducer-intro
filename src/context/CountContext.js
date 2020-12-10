import React, { useReducer } from "react";

export const CountContext = React.createContext({});

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      console.log("INCREMENT");
      break;

    case "DECREMENT":
      console.log("DECREMENT");
      break;

    default:
      return initialState;
  }
}

function CountContextComponent({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
}

export default CountContextComponent;
