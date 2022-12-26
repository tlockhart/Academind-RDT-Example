import React from 'react';

const DisplayUser = ({users}) => {
  // Dispatch deleteTodo action to delete a todo when  delete button is clicked
  const handleIncrementClick = (event) => {
    event.preventDefault();
    console.log("Increment Event:", event.target.value);
    // Displate incrementCounter reducer
    // dispatch(incrementCounter({
    // 	id: id,
    // }));
  };

    const displayUsers = () => {
        users.map((user, index) => {
            console.log("DisplayUsers:", user);
            return (
                <>
                    <span>
                    Name:
                    <input
                        type="text"
                        className="mr-3"
                    ></input>
                    </span>
                    <button className="btn btn-danger" onClick={handleIncrementClick}>
                    Increment
                    </button>
                    <button className="btn btn-danger" type="submit">
                    Submit
                    </button>
                </>
            )
        });
    }
    return (
        <div>
            {displayUsers()}
        </div>
    );
};

export default DisplayUser;