import React from 'react';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

const Wrapper = styled.div`
	max-width: 1366px;
	margin: 0 auto;
`;

const Image = styled(GatsbyImage)`
	width: 260px;
	height: 260px;

	margin: 0;
`;

export default ({ avatar }) => (
	<Wrapper>
		<Image fluid={avatar} />
	</Wrapper>
);
