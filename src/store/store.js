import {createStore} from 'redux'

const INITIAL_STATE = {
  tasks: [
    
  ]
}

const counter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_NEW_NUMBER': // action.data
      return { numbers: [...state.numbers, action.data]};

    case 'REMOVE':
      return { numbers: [...state.numbers ]};

    default:
      return state;
  }
}

const store = createStore(counter);

export default store;