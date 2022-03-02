import { useMemo } from 'react';
import { Box, Flex, Heading, Subheading, Subtitle } from '@/components';
import FeatureCard from './FeatureCard';

export type FeatureProps = {
	title: string;
	body: string;
};

const Feature = () => {
	const features = useMemo<FeatureProps[]>(
		() => [
			{
				title: 'The best products start with Sketch',
				body: 'Slate helps you see how many more days you need to work to reach your financial goal. ',
			},
			{
				title: 'Fastest way to organize',
				body: 'Slate helps you see how many more days you need to work to reach your financial goal. ',
			},
			{
				title: 'Work better together',
				body: 'Slate helps you see how many more days you need to work to reach your financial goal. ',
			},
		],
		[]
	);

	return (
		<Box css={{ backgroundColor: '$backgroundLight', py: 80 }}>
			<Flex direction='column' css={{ gap: 50 }}>
				<Flex
					direction='column'
					justify='center'
					align='center'
					css={{ mx: 50, gap: 7, ta: 'center' }}
				>
					<Heading>At your fingertips</Heading>
					<Box css={{ p: 10 }}>
						<Subtitle>Features</Subtitle>
					</Box>
					<Box css={{ p: 10 }}>
						<Subheading>Most calendars are designed for teams.</Subheading>
						<Subheading>Slate is designed for freelancers</Subheading>
					</Box>
				</Flex>

				<Flex
					direction={{ '@mobileS': 'column', '@laptop': 'row' }}
					justify='center'
					align='center'
					css={{ py: 18, mx: 74, gap: 75 }}
				>
					{features.map((feature, index) => (
						<FeatureCard key={index} {...feature} />
					))}
				</Flex>
			</Flex>
		</Box>
	);
};

export default Feature;
