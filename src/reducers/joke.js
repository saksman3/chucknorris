export default (state = {}, action) => {
  switch (action.type) {
    case "GET_JOKE":
      return action.joke;
    default:
      return state;
  }
};
