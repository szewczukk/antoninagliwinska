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
		theme: {
			colors: { primary },
		},
	}) => primary};

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
