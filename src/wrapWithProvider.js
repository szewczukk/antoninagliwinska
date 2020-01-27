import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import RootReducer from './reducers';

export default ({ element }) => {
	const store = createStore(
		RootReducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__(),
	);
	return <Provider store={store}>{element}</Provider>;
};
