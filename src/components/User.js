import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateName, incrementCounter } from "../redux/usersSlice";

const User = ({ user }) => {
  const dispatch = useDispatch();
  // Destructure object
  const { name, id, index, counter } = user;
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    event.preventDefault();
    // Get input value
    const value = event.target.value;
    console.log("handleChange value:", value);
    setInputText(value);
  }

  const handleUpdateClick = (event, id) => {
    event.preventDefault();
    console.log("handleUpdateClick Name:", event.currentTarget);
    // Dispatch the updateName Action and pass in id and name to update
    dispatch(
      updateName({
        id: id,
        name: inputText,
      })
    );
  };

  const handleIncrementClick = (event, id, counter) => {
    event.preventDefault();
    console.log(`Increment Event id: ${id}, counter: ${counter}`);
    // Displate incrementCounter reducer, passing it new values
    dispatch(
      incrementCounter({
        id: id,
        counter: parseInt(counter) + 1,
      })
    );
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <span>
        Name:
        <input
          style={{ marginLeft: "10px" }}
          type="text"
          className="mr-3"
          placeholder={name}
          value={inputText}
          onChange={(event) => {
            event.stopPropagation();
            handleChange(event);
          }}
        ></input>
      </span>
      <button
        style={{ marginLeft: 10 + 'px' }}
        className="btn btn-danger"
        onClick={(event) => {
          event.stopPropagation();
          handleIncrementClick(event, id, counter);
        }}
      >
        Increment
      </button>
      <button
        style={{ marginLeft: 10 +'px' }}
        className="btn btn-danger"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          handleUpdateClick(event, id);
        }}
      >
        Update
      </button>
      <span style={{ marginLeft: 10 + 'px' }}>count: {counter}</span>
    </div>
  );
};

export default User;
