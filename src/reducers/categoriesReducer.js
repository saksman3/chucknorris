export default (state = [], action) => {
  switch (action.type) {
    case "GET_LIST":
      return action.categories;
    default:
      return state;
  }
};
