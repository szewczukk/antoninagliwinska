import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

const Wrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	background: white;

	display: ${({ navigationToggled }) => (navigationToggled ? 'block' : 'none')};

	z-index: 2;
`;

const Navigation = ({ navigationToggled, toggleNavigation }) => (
	<Wrapper navigationToggled={navigationToggled}>
		<p>{navigationToggled}</p>
		<button onClick={toggleNavigation} type="button">
			Toggle
		</button>
	</Wrapper>
);

const mapStateToProps = ({ navigationToggled }) => {
	return { navigationToggled };
};

const mapDispatchToProps = dispatch => {
	return { toggleNavigation: () => dispatch({ type: 'TOGGLE_NAVIGATION' }) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
