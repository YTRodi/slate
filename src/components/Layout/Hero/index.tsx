import { Box, Flex, Button } from '@/components';
import Title from './Title';
import HeroImage from './Image';

const Hero = () => {
	return (
		<Box css={{ py: 30, px: 20 }}>
			<Flex direction='column' css={{ py: 50, gap: 60 }}>
				<Title />
				<HeroImage />
				<Button appearance='primary'>Try for free</Button>
			</Flex>
		</Box>
	);
};

export default Hero;
