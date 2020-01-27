<<<<<<< HEAD
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;

	width: 100%;
	height: 100vh;

	background: ${({
=======
import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { connect } from 'react-redux';

const Wrapper = styled.div`
	position: sticky;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	background: white;

	display: ${({ navigationToggled }) => (navigationToggled ? 'flex' : 'none')};
	align-items: center;
	justify-content: flex-start;
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
>>>>>>> navigation
		theme: {
			colors: { primary },
		},
	}) => primary};
<<<<<<< HEAD

	display: ${({ toggleNavigation }) => (toggleNavigation ? 'flex' : 'none')}

	align-items: center;
	justify-content: center;
`;

export default ({ toggleNavigation }) => (
	<Wrapper toggleNavigation={toggleNavigation}>
		<ul>
			<li>
				<Link to="/#home">Strona główna</Link>
			</li>
			<li>
				<Link to="/#about">O mnie</Link>
			</li>
			<li>
				<Link to="/#offer">Oferta</Link>
			</li>
			<li>
				<Link to="/#contact">Kontakt</Link>
			</li>
		</ul>
	</Wrapper>
);
=======
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
>>>>>>> navigation
