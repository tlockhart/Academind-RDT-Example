export const deleteUserReducer = (state, action) => {
  console.log("Delete User action:", action);
  console.log("Delete User state:", state);

    //find the index in the user item by id
   // compare the user id with the id of the action payload
   return state.filter((user) => user.id !== action.payload.id);
};
