import { Getdata } from "../types/types";

    const dfstate={
        userarray:[]
    }

export const reducersForm= (state=dfstate, action) =>{
    console.log(state,action)

    switch (action.type) {
        case Getdata:
            
            return {
                userarray:action.data    
            };
    
        default:
            return state;
    }

}