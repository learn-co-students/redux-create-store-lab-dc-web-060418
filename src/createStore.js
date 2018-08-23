import countReducer from './reducers/countReducer'
import candyReducer from './reducers/candyReducer'

console.log(candyReducer)

export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
  }

  function getState() {
    return state
  };

  dispatch({type: '@@INIT'})

  return {
    dispatch,
    getState
  };
}
