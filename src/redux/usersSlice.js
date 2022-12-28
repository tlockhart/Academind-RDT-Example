// Step 1: Import Redux Toolkit (RTK)
import { createSlice } from "@reduxjs/toolkit";
import { incrementCounterReducer} from "./reducers/counterReducer";
import { updateNameReducer } from "./reducers/nameReducer";
import { getUsersReducer} from "./reducers/usersReducer";
import { addUserReducer } from "./reducers/addUserReducer";
import { deleteUserReducer } from "./reducers/deleteUserReducer";

// Step3 Option: Create a Slice:
const usersSlice = createSlice({
  name: "users",
  initialState: [
    {
      id: 0,
      index: 0,
      counter: 0,
      name: "John Doe",
    },
    {
      id: 1,
      index: 1, 
      counter: 0,
      name: "Jane Doe",
    },
  ],
  reducers: {
    incrementCounter: incrementCounterReducer,
    updateName: updateNameReducer,
    getUsers: getUsersReducer,
    addUser: addUserReducer,
    deleteUser: deleteUserReducer
  },
});

// Note: usersSlice.actions automatically creates actions based on our reducer names
export const { incrementCounter, updateName, getUsers, addUser, deleteUser} = usersSlice.actions;

// export  reducer from todoSlice
export default usersSlice.reducer;
