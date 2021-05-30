import React from 'react';
import { connect } from 'react-redux';
import { steps } from './store/action';

function Steps(props) {
  return (
    <>
      <button
        className={props.step === 5 && 'active'}
        onClick={() => props.dispatch(steps(5))}
      >
        5
      </button>
      <button
        className={props.step === 10 && 'active'}
        onClick={() => props.dispatch(steps(10))}
        id="mx"
      >
        10
      </button>
      <button
        className={props.step === 15 && 'active'}
        onClick={() => props.dispatch(steps(15))}
      >
        15
      </button>
    </>
  );
}

function mapStateToProps(state) {
  return {
    step: state.step,
  };
}

export default connect(mapStateToProps)(Steps);
