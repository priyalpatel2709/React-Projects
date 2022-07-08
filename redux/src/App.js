import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import { increment,decrement } from './Reducer/Increment';
// import { decrement } from './Reducer/Decrement';
function App(prpos) {
  const count = useSelector(count => count.incrementReducer )
  const dispatch = useDispatch()
  return (
    <>
    <div className="App">
      <h1>REDUX</h1>
      <h1>{count} </h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
    </div>
    </>
  );
}

export default App;
