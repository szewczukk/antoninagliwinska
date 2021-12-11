import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import RootReducer from './reducers';

export default ({ element }) => {
	const store = createStore(RootReducer);
	return <Provider store={store}>{element}</Provider>;
};
