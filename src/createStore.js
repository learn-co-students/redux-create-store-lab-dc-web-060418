export default function createStore(reducer) {
  // add your code here
    let state = reducer(undefined, {type: "@@INIT"});
    function getState() {
	return state;
    }
    function dispatch(action) {
	state = reducer(state, action);
	render();
    }

    return { getState, dispatch };
}

function render() {
  const container = document.getElementById('container');
}
