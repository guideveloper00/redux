import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index.js";
import App from "./App";
import "./index.css";
/* if you need help to understand the notes, check the readme file or go to my youtube channel ------- */

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* #2 - React redux library - here we provide our store to the application */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
