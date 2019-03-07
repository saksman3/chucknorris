import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import ConfigureStore from "./store/configureStore";
import "./sass/main.scss";
const store = ConfigureStore();
function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

const rootElement = document.getElementById("root");
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(jsx, rootElement);
