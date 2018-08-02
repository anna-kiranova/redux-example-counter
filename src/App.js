import React from 'react';
import { connect } from 'react-redux';
import { incr, decr } from './actions/counter';

const App = ({
  counter,
  incr,
  decr
}) => <div>
          <input readOnly={true} value={counter} /><br/>
          <button onClick={decr}>-</button>
          <button onClick={incr}>+</button>
        </div>

const mapStateToProps = state => {
  return {
    counter: state,
  }
};

const mapDispatchToProps = (dispatch) => ({
  incr: () => dispatch(incr()),
  decr: () => dispatch(decr()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
