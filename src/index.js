import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/*Only importing the store doesn't connect the store to React*/
/*combineReducers allows to combine the reducers. It is a function which takes a JavaScript object, mapping the reducers
to different slices of the state as input and merges everything into one state, one reducer*/
import { createStore, combineReducers} from 'redux'; 
/*Provider is a helper component that allows to inject the store into the react components*/
import { Provider } from 'react-redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducers = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})
const store = createStore(rootReducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
