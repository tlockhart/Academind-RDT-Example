import React, {useEffect} from 'react';
// Step 1: Import Redux Toolkit (RTK)
import { createSlice } from "@reduxjs/toolkit";
import { incrementCounter } from "./reducers/counterReducer";
import { updateName} from "./reducers/nameReducer";
import { getUsers} from "./reducers/usersReducer";

// Step3 Option: Create a Slice:
const usersSlice = createSlice({
  name: "users",
  initialState: [
    {
      id: 0,
      title: "INCREMENT_COUNTER",
      counter: 0,
      name: "John Doe",
    },
    {
      id: 1,
      title: "UPDATE_NAME",
      counter: 1,
      name: "Jane Doe",
    },
  ],

  reducers: {
    incrementCounter: incrementCounter,
    updateName: updateName,
    getAllUsers: getUsers,
  },
});

// Note: usersSlice.actions automatically creates actions based on our reducer names
export const { counterReducer } = usersSlice.actions;

// export  reducer from todoSlice
export default usersSlice.reducer;
