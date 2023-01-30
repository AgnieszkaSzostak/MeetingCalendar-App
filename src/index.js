import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { reducer } from './reducers';
import App from './App';
import { Provider } from 'react-redux';
import ResetStyle from './styled/Reset';
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()) 

const root = createRoot(document.querySelector('#root'));

root.render(
    <Provider store={store}>
        <ResetStyle/>
        <App />
    </Provider>
);
