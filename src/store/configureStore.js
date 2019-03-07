import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import categoryReducer from "../reducers/categoriesReducer";
import jokeReducers from "../reducers/joke";
import SearchReducer from "../reducers/searchReducer";
import StatusReducer from "../reducers/statusReducer";
export default () => {
  const store = createStore(
    combineReducers({
      categories: categoryReducer,
      joke: jokeReducers,
      searchResult: SearchReducer,
      status: StatusReducer
    }),
    applyMiddleware(thunk)
  );
  store.subscribe(() => {
    console.log(store.getState());
  });
  return store;
};
