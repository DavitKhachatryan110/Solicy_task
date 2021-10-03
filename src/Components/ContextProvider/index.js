import React, { useReducer, useContext } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];
    case "REMOVE":
      const newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
      case "CHANGE":
          const changedArr = [...state]
          changedArr.splice(action.index , 1 , action.data)
          return changedArr;
    default:
      throw new Error(`unknown action ${action.type}`);
  }
};

const DataContext = React.createContext();
const DataDispachContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <DataDispachContext.Provider value={dispatch}>
      <DataContext.Provider value={state}>{children}</DataContext.Provider>
    </DataDispachContext.Provider>
  );
};

export const useCardState = () => useContext(DataContext); 
export const useDataDispach = () => useContext(DataDispachContext);
