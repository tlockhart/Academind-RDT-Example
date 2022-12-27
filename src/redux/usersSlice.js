// Step 1: Import Redux Toolkit (RTK)
import { createSlice } from "@reduxjs/toolkit";
import { incrementCounterReducer} from "./reducers/counterReducer";
import { updateNameReducer } from "./reducers/nameReducer";
import { getUsersReducer} from "./reducers/usersReducer";

// Step3 Option: Create a Slice:
const usersSlice = createSlice({
  name: "users",
  initialState: [
    {
      id: 0,
      index: 0,
      // title: "INCREMENT_COUNTER",
      // type: "INCREMENT_COUNTER",
      counter: 0,
      name: "John Doe",
    },
    {
      id: 1,
      index: 1, 
      // title: "UPDATE_NAME",
      // type: "UPDATE_NAME",
      counter: 0,
      name: "Jane Doe",
    },
  ],
  reducers: {
    incrementCounter: incrementCounterReducer,
    updateName: updateNameReducer,
    getUsers: getUsersReducer,
  },
});

// Note: usersSlice.actions automatically creates actions based on our reducer names
export const { incrementCounter, updateName, getUsers} = usersSlice.actions;

// export  reducer from todoSlice
export default usersSlice.reducer;
