import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {INCREMENT ,DECREMENT} from './redux/actions/types'
function App() {

  const countState = useSelector(state => state.count);
  const dispatch = useDispatch()

 const handleIncrement = () => {

   dispatch({
     type : INCREMENT
   })

 }

 const handleDecrement = () => {

   dispatch ({
     type: DECREMENT
   })

 }
  return (
    <div className="App">
      <div>{countState}</div>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
    </div>
  );
}

export default App;
