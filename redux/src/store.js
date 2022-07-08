import { createStore } from 'redux'
import root from './Reducer';

const store = createStore(root,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => console.log(store.getState()))

export default store;