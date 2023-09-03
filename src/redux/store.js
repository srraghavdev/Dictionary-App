import { getReducer } from "./reducer/getReducer";
import { searchReducer } from "./reducer/searchReducer";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

let rootreducer  = combineReducers({
    api:getReducer,
    search:searchReducer
})

export const store = createStore(rootreducer,applyMiddleware(thunk))