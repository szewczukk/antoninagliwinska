import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { connect } from 'react-redux';

const Wrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	background: white;

	display: ${({ navigationToggled }) => (navigationToggled ? 'flex' : 'none')};
	align-items: center;
	justify-content: center;
	flex-direction: column;

	z-index: 2;
`;

const List = styled.ul`
	list-style: none;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Element = styled.li`
	margin: 2rem 0;
	padding: 1rem;
	font-size: 1.5rem;

	cursor: pointer;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${({
		theme: {
			colors: { primary },
		},
	}) => primary};
`;

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.handleLinkClick = this.handleLinkClick.bind(this);
	}

	handleLinkClick() {
		this.props.toggleNavigation();
	}

	render() {
		const { navigationToggled, toggleNavigation } = this.props;
		return (
			<Wrapper navigationToggled={navigationToggled}>
				<button onClick={toggleNavigation} type="button">
					Toggle
				</button>
				<List>
					<StyledLink to="/#home" onClick={toggleNavigation}>
						<Element>Strona główna</Element>
					</StyledLink>
					<StyledLink to="/#about" onClick={toggleNavigation}>
						<Element>O mnie</Element>
					</StyledLink>
					<StyledLink to="/#offer" onClick={toggleNavigation}>
						<Element>Oferta</Element>
					</StyledLink>
					<StyledLink to="/#contact" onClick={toggleNavigation}>
						<Element>Kontakt</Element>
					</StyledLink>
				</List>
			</Wrapper>
		);
	}
}

const mapStateToProps = ({ navigationToggled }) => {
	return { navigationToggled };
};

const mapDispatchToProps = dispatch => {
	return { toggleNavigation: () => dispatch({ type: 'TOGGLE_NAVIGATION' }) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
