import { combineReducers, createStore } from "redux";
import { reducersForm } from "./reducerForm";

export const rootreducer=combineReducers({
    apidata2:reducersForm
})