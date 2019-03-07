const defaultState = {
  fetch_failed: false,
  error: "",
  fetching: false,
  fetchSuccess: false
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case "FAILED":
      return {
        ...state,
        fetch_failed: true,
        fetching: false
      };
    case "Fetching":
      return {
        ...state,
        fetching: true
      };
    case "FetchSuccess":
      return {
        ...state,
        fetchSuccess: true,
        fetching: false
      };
    default:
      return state;
  }
};
