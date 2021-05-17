import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '@components/ProTip';
import Link from '@Link';
import Copyright from '@components/Copyright';

export default function About(): JSX.Element {
	return (
		<Container maxWidth='sm'>
			<Box my={4}>
				<Typography variant='h4' component='h1' gutterBottom>
					Next.js with styled-components, Material-ui and Typescript example
				</Typography>
				<Link href='/'>Go to the main page</Link>
				<ProTip />
				<Copyright />
			</Box>
		</Container>
	);
}
