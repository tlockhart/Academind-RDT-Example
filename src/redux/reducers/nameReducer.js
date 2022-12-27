export const updateNameReducer = (state, action) => {
  console.log("DISPATCHED UPDATENAME action:", action);
  console.log("DISPATCHED UPDATENAME state:", state);

    //find the index in the state item by id
    const index = state?.findIndex((user) => user.id === action.payload.id);
      
   // update the name property of the state[index] item:
   state[index].name = action.payload.name;

  return state;
};
