import React, { useReducer, useContext } from "react";
import { ADD_PLAYER, CHANGE_INFO, REMOVE_PLAYER } from "../../Constants/index";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];
    case "REMOVE":
      const newArr = [...state];
      const removedItem = newArr.indexOf(
        newArr.find((item) => item.id == action.id)
      );
      newArr.splice(removedItem, 1);
      return newArr;
    case "CHANGE":
      const changedArr = [...state];
      const changedTeam = changedArr.indexOf(
        changedArr.find((item) => item.id == action.id)
      );
      changedArr.splice(changedTeam, 1, action.data);
      return changedArr;
    case ADD_PLAYER:
      const withPlayer = [...state];
      const courrentIndex = withPlayer.indexOf(
        withPlayer.find((item) => item.id == action.teamID)
      );
      withPlayer[courrentIndex].team.push(action.item);
      return withPlayer;
    case CHANGE_INFO:
      const changes = [...state];
      const courrentChangedTeam = changes.indexOf(
        changes.find((item) => item.id == action.teamID)
      );
      const courrentChangedPlayer = changes[courrentChangedTeam].team.indexOf(
        changes[courrentChangedTeam].team.find(
          (item) => item.id == action.data.id
        )
      );
      changes[courrentChangedTeam].team.splice(
        courrentChangedPlayer,
        1,
        action.data
      );
      return changes;
    case REMOVE_PLAYER:
      const stateForRemove = [...state];

      const afterRemove = stateForRemove.indexOf(
        stateForRemove.find((item) => item.id == action.teamID)
      );
      const itemForRemove = stateForRemove[afterRemove].team.indexOf(
        stateForRemove[afterRemove].team.find((item) => item.id == action.teamId)
      );
      stateForRemove[afterRemove].team.splice(itemForRemove, 1);
      return stateForRemove;

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
