import { combineReducers } from "redux";
import { proreducer } from "./proreduser";


export const rootreducer =combineReducers({
    prodata:proreducer,
})