import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/*Only importing the store doesn't connect the store to React*/
import { createStore } from 'redux'; 
/*Provider is a helper component that allows to inject the store into the react components*/
import { Provider } from 'react-redux';
import reducer from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
