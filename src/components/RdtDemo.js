import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/usersSlice";
import DisplayUser from "./DisplayUser";
import AddUser from "./AddUser";

const RdtDemo = () => {
  const dispatch = useDispatch();

  // NOTE: We no longer have to pass props into components:
  // Simply add the data on the component you want.
  // const users = useSelector((state) => state.users);
  // console.log("USERS:", users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <form>
        <DisplayUser/>
        <AddUser />
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
