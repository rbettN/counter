import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/*Only importing the store doesn't connect the store to React*/
/*combineReducers allows to combine the reducers. It is a function which takes a JavaScript object, mapping the reducers
to different slices of the state as input and merges everything into one state, one reducer*/
/*applyMiddleware allows to add our own middleware to the stores*/ 
import { createStore, combineReducers, applyMiddleware } from 'redux'; 
/*Provider is a helper component that allows to inject the store into the react components*/
import { Provider } from 'react-redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducers = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
}

const store = createStore(rootReducers, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
