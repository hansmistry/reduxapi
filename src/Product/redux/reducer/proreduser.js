import { GETPRODATA } from "../Type/types";

let dfstate={
    proarray:[]
}



export const proreducer=(state=dfstate,action)=>{

    console.log(state,action);
    switch (action.type) {
        case GETPRODATA :
            
            return {
                proarray: action.data
            };
    
        default:
            return state;
    }
}