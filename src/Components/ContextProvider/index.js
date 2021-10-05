import React, { useReducer, useContext } from "react";
import { ADD_PLAYER, CHANGE_INFO, REMOVE_PLAYER } from "../../Constants/index";

const reducer = (state, action) => {
  console.log(action.index, "wwwwwwwwooooooooooooooowwwwwwwwwwww");
  switch (action.type) {
    case "ADD":
      return [...state, action.item];
    case "REMOVE":
      const newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
    case "CHANGE":
      const changedArr = [...state];
      changedArr.splice(action.index, 1, action.data);
      return changedArr;
    case ADD_PLAYER:
      const withPlayer = [...state];
      withPlayer[action.index].team.push(action.item);
      return withPlayer;
    case CHANGE_INFO:
      const changes = [...state];
      changes[action.index].team.splice(action.indexOfPlayer, 1, action.data);
      return changes;
    case REMOVE_PLAYER:
      const afterRemove = [...state];
      afterRemove[action.index].team.splice(action.indexOfPlayer, 1);
      console.log(afterRemove);
      return afterRemove;

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
