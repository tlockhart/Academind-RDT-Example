// Step 2: Create Reducer:  You can think of a reducer as an event listener which handles events based on the received action (event) type.
// Note give state a default value that will be executed the first time the app runs
// Note: The action is the object which was dispatched
export const incrementCounterReducer = ( state, action) => {
    console.log("Action:", action);
    console.log("Action State:", state)
    //find the index in the state item by id
    const index = state?.findIndex((user) => user.id === action.payload.id);
    // Update state counter
    state[index].counter = parseInt(action.payload.counter);
  };