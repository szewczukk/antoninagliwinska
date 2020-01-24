const initialState = { navigationToggled: false };

export default (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_NAVIGATION':
			return { navigationToggled: !state.navigationToggled };
		default:
			return state;
	}
};
