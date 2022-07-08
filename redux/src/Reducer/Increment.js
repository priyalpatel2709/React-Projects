export function increment(){
    return {
        type : 'INCREMENT',
            }
}
export function decrement(){
    return {
        type : 'DECREMENT',
            }
}
export default function incrementReducer(count=0,action){
    switch(action.type){
        case "INCREMENT":
            return count+1
        case "DECREMENT":
             return count-1
        default :
            return count;           
    }

}