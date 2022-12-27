import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/usersSlice";
import DisplayUser from "./DisplayUser";

const RdtDemo = () => {
  const dispatch = useDispatch();

  // keep track of users:
  const users = useSelector((state) => state.users);
  console.log("USERS:", users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <form>
        <DisplayUser users={users} />
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
