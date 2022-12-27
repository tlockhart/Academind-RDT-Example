export const addUserReducer = (state, action) => {
  console.log("GETUDERS state:", state);
  const newIndex = state.length;

  const newUser = {
    id: newIndex,
    // All data on action is placed on the payload
    index: newIndex,
    counter: 0,
    name: action.payload.name,
  };

  // add a new Todo
  state.push(newUser);
      return state;
  // }
};
