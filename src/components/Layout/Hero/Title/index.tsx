import { Flex, Box, Subtitle, Subheading } from '@/components';

const Title = () => {
	return (
		<Flex css={{ ta: 'center', mx: 30, gap: 7 }} direction='column'>
			<Box css={{ p: 10 }}>
				<Subtitle>Lightning fast</Subtitle>
				<Subtitle>prototyping</Subtitle>
			</Box>

			<Box css={{ p: 10 }}>
				<Subheading>Most calendars are designed for teams.</Subheading>
				<Subheading>Slate is designed for freelancers</Subheading>
			</Box>
		</Flex>
	);
};

export default Title;
