export const getUsers = (state = { counter: -1, name: "" }, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
      };
    default:
      // return default state
      return state;
  }
};
