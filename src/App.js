import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incrementAction,decrementAction,incrementbyAction } from './redux/actions/counterActions';
function App() {

  const countState = useSelector(state => state.count);
  const dispatch = useDispatch()

 const handleIncrement = () => dispatch(incrementAction())

 const handleDecrement = () => dispatch(decrementAction())

 const handleIncrementBy = () => dispatch(incrementbyAction())

  return (
    <div className="App">
      <div>{countState}</div>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <button onClick={handleIncrementBy}>INCREMENT BY 5</button>
    </div>
  );
}

export default App;
