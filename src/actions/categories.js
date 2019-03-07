import { fetchFailed, fetchSuccess, fetching } from "./status";
export const GetList = list => {
  return {
    type: "GET_LIST",
    categories: list
  };
};
export const fetchList = () => {
  return dispatch => {
    dispatch(fetching());
    fetch("https://api.chucknorris.io/jokes/categories")
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch(GetList(json));
        dispatch(fetchSuccess());
        console.log("data", json);
      })
      .catch(error => {
        console.log("error occured");
        dispatch(fetchFailed(error.message));
      });
  };
};
