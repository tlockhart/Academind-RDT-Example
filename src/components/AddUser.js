import React, { useState }  from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addUser} from "../redux/usersSlice";

const AddUser = () => {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        event.preventDefault();
        // Get input value
        const value = event.target.value;
        console.log("handleChange value:", value);
        setInputText(value);
      }

    const handleAddItemClick = (event) => {
        event.preventDefault();
        console.log("handleAddItemClick Name:", event.currentTarget);
        // Dispatch the updateName Action and pass in id and name to update
        dispatch(
          addUser({
            name: inputText,
          })
        );
        setInputText("");
      };

    return (
        <div style={{ marginBottom: "10px" }}>
      <span>
        Name:
        <input
          style={{ marginLeft: "10px" }}
          type="text"
          className="mr-3"
          placeholder="Enter new Name"
          value={inputText}
          onChange={(event) => {
            event.stopPropagation();
            handleChange(event);
          }}
        ></input>
      </span>
      <button
        style={{ marginLeft: 10 +'px' }}
        className="btn btn-danger"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          handleAddItemClick(event);
        }}
      >
        Add
      </button>
    </div>
    );
};

export default AddUser;