import { fetchFailed, fetchSuccess, fetching } from "./status";
export const searchResult = results => {
  return {
    type: "SEARCH_TEXT",
    results
  };
};
export const Search = text => {
  return dispatch => {
    dispatch(fetching());
    fetch(`https://api.chucknorris.io/jokes/search?query=${text}`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch(searchResult(json));
        dispatch(fetchSuccess());
      })
      .catch(error => {
        dispatch(fetchFailed(error.message));
      });
  };
};
