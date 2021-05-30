import { connect } from 'react-redux';
import Steps from './Steps';
import { decrement, increment, reset } from './store/action';

function App(props) {
  return (
    <>
      <h1>{props.count}</h1>
      <div className="mx">
        <button onClick={() => props.dispatch(increment())}>increment</button>
        <button onClick={() => props.dispatch(decrement())} className="mx">
          decrement
        </button>
        <button onClick={() => props.dispatch(reset())}>reset</button>
      </div>
      <div className="m">
        <Steps />
      </div>
    </>
  );
}

function getCount(state) {
  return {
    count: state.value,
  };
}
export default connect(getCount)(App);
