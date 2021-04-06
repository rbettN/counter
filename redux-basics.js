const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
}

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Dispatching
/*The dispatch function takes an argument (action) which is a JavaScript object which
needs to have a type*/
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

//Subscription

