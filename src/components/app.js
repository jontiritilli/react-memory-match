import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import App from './components/App';

ReactDOM.render(
	<BrowserRouter>
		<Provider store={createStore(rootReducer)}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);