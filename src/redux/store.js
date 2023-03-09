import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';

import countriesReducer from "./countriesReducer"
import thunk from "redux-thunk"

const store = createStore(countriesReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store