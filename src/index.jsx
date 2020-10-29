import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';

import reducers from './Reducers'


let store = createStore(reducers, compose(applyMiddleware(thunk)) )

ReactDOM.render(<Provider store = {store}> 
					<App />
				</Provider>, document.querySelector('#root'))

