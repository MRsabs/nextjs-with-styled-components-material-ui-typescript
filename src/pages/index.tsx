import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '@components/ProTip';
import Link from '@Link';
import Copyright from '@components/Copyright';
import styled from 'styled-components';

const Title = styled.span`
	color: blue;
`;

export default function Index(): JSX.Element {
	return (
		<Container maxWidth='sm'>
			<Box my={4}>
				<Typography variant='h4' component='h2' gutterBottom>
					<Title>Next.js with styled-components, Material-ui and Typescript</Title>
				</Typography>
				<Link href='/about' color='secondary'>
					Go to the about page
				</Link>
				<ProTip />
				<Copyright />
			</Box>
		</Container>
	);
}
