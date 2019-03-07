import { fetchFailed, fetchSuccess, fetching } from "./status";
export const getJoke = joke => {
  return {
    type: "GET_JOKE",
    joke
  };
};
export const fetchRandomJoke = category => {
  console.log(category);
  return dispatch => {
    dispatch(fetching());
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch(getJoke(json));
        dispatch(fetchSuccess());
      })
      .catch(error => {
        dispatch(fetchFailed(error.message));
      });
  };
};
