
const DEFAULT_STATE = 0;

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case 'INCR':
          return state + action.value;
        case 'DECR':
          return state - action.value;
        default:
          return state;
      }
}