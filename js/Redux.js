const redux = require("redux")

function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

function addFavoriteThing(thing) {
    return {
        type: "ADD_FAVORITE_THING",
        
        payload: thing
    }
}
function removeFavoriteThing(thing) {
    // let temp=thing;
    // console.log(temp);
    return {
        type: "REMOVE_FAVORITE_THING",
        payload: thing
    }
}
const initialState = {
    count: 0,
    favoriteThings: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
                ...state,
                count: state.count + action.payload
            }
        case "ADD_FAVORITE_THING":
            return {
                ...state,
                favoriteThings: [...state.favoriteThings, action.payload]
            }
        case "REMOVE_FAVORITE_THING":{
            let arr=state.favoriteThings.filter(thing=>thing !==action.payload)
            return {
                ...state,
                favoriteThings:arr
            }  
        }
                    
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
    let data=store.getState()
    return data.favoriteThings
})

store.dispatch(addFavoriteThing("Raindrops on roses"))
store.dispatch(addFavoriteThing("Whiskers on kittens"))
store.dispatch(removeFavoriteThing("Raindrops on roses"))
let s=store.getState()
console.log(s.favoriteThings);