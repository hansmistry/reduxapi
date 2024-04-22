import { GETAPIDATA } from "../types/types";

const dfstate = {
    array: []
}


export const formreducer = (state = dfstate, action) => {
    console.log(state, action);
    switch (action.type) {
        case GETAPIDATA:
                console.log(action.data)
            return {
                array:action.data
            }

        default:
            return state;
    }
}