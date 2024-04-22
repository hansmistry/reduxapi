import { combineReducers } from "redux";
import { formreducer } from "./formreducer";

export const rootreducer = combineReducers({
     apidata: formreducer,
}
)