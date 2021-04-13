import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/*Only importing the store doesn't connect the store to React*/
/*combineReducers allows to combine the reducers. It is a function which takes a JavaScript object, mapping the reducers
to different slices of the state as input and merges everything into one state, one reducer*/
/*applyMiddleware allows to add our own middleware to the stores*/ 
/*compose allows to combine enhancers. While middlewares is only for middlewares, other enhancers such as the
dev tools, we need compose to compose a set of enhancers with both dev tool features and the middlewares*/
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; 
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
