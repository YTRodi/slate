import { Box, Button, Flex, Image } from '@/components';
import Title from './Title';

const Hero = () => {
	return (
		<Box css={{ background: '$backgroundLight', py: 30, px: 20 }}>
			<Flex
				css={{ py: 50, gap: 60 }}
				direction='column'
				justify='center'
				align='center'
			>
				<Title />

				<Button appearance='primary' css={{ width: 236 }}>
					Try for free
				</Button>

				<Image src='/assets/images/hero/macbook-pro.png' />
			</Flex>
		</Box>
	);
};

export default Hero;
