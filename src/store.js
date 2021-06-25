import { applyMiddleware, createStore, compose } from 'redux';

const initialState = {
  counter: 0,
  data: [],
};

const reducer = (state = { counter: 0, data: [] }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState, compose(applyMiddleware()));

export default store;
