import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import store from "./app/store";

import App from "./App";

import "./a-sass/base/base.scss"
import "./main.scss"
import "./a-sass/media/media.scss"

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);