// Step 2: Create Reducer:  You can think of a reducer as an event listener which handles events based on the received action (event) type.
// Note give state a default value that will be executed the first time the app runs
// Note: The action is the object which was dispatched
export const incrementCounter = ( state = { counter: -1, name: "" }, action) => {
    console.log("Action:", action);
    console.log("Action State:", state)
    switch (action.type) {
      case "INCREMENT_COUNTER":
        return {
            ...state,
          counter: state.counter + 1,
        };
      default:
        // return default state
        return state;
    }
  };