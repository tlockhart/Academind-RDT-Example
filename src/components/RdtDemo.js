import React, {useEffect} from "react";
import { redux } from "@reduxjs/toolkit";
import { incrementCounter } from "../redux/reducers/counterReducer";
import { updateName } from "../redux/reducers/nameReducer";
import { useSelector, useDispatch } from 'react-redux';
// import getTodosAsync Thunk middleware
// import { getUsers as getAllUsers } from '../redux/usersSlice';

import DisplayUser from "./DisplayUser";

const RdtDemo = () => {
  const dispatch = useDispatch();

  // keep track of users:
  const users = useSelector((state) => state.users);
console.log("USERS:", users);

  const handleSubmitClick = (event) => {
    event.preventDefault();
    console.log("Name:", event.currentTarget.value);
    // dispatch updateName Reducer
    // dispatch(updateName({
    // 	id: id,
    // }));
  };

  useEffect(()=> {
	// dispatch(getAllUsers())
  }, [dispatch]);

  return (
    <div>
      <form onClick={handleSubmitClick}>
        {/* <DisplayUser
		users={users}/> */}
      </form>
    </div>
  );
};

export default RdtDemo;

// Step 5: Dispatch an action that will change the counterSlice
// store.dispatch(counterAction());
// store.dispatch(nameAction("Tony Lockhart"));

// Step 6: Execute file
// node redux-demo.js

// console.log("POST State: ", store.getState());
