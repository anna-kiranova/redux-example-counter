import { createStore } from 'redux';
import reducer from './reducers';
/*
const reducer = () => {
    console.log('aaa')
}
*/
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );