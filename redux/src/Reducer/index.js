import  incrementReducer  from "./Increment";
import  decrementReducer  from "./Decrement";
// import redux, {createStore} from "redux"
import { combineReducers } from 'redux'

const root =combineReducers({
         incrementReducer,
        //  decrementReducer
})

export default root;
 
// function reducer (count=0,action){
//     switch (action.type) {
//         case "INCREMENT":
//            return count+1 
            
//         case "DECREMENT":
//             return count-1  
//         default:
//            return count
        
//     }
// }
// const store = createStore(reducer)
// store.subscribe(() => console.log(store.getState()))
// export default store;