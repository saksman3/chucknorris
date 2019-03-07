export default (state = [], action) => {
  switch (action.type) {
    case "SEARCH_TEXT":
      return action.results;
    default:
      return state;
  }
};
