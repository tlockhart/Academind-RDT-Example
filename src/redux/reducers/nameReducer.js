export const updateName = (state = { counter: -1, name: "" }, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return {
        ...state,
        //   counter: state.counter,
        name: action.payload.name,
      };
    default:
      // return default state
      return state;
  }
};
