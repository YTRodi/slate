import { Box, Subtitle, Flex, Subheading } from '@/components';

const Title = () => (
	<Box css={{ p: 10, ta: 'center' }}>
		<Box css={{ p: 10 }}>
			<Subtitle color='textLight'>Lightning fast prototyping</Subtitle>
		</Box>

		<Flex direction='column' css={{ p: 10 }}>
			<Subheading color='textLight'>
				Most calendars are designed for teams.
			</Subheading>
			<Subheading color='textLight'>
				Slate is designed for freelancers
			</Subheading>
		</Flex>
	</Box>
);

export default Title;
