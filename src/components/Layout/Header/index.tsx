import { Box, Flex, Button } from '@/components';
import Title from './Title';
import Image from './Image';

const Header = () => {
	return (
		<Box css={{ py: 30, px: 20 }}>
			<Flex direction='column' css={{ py: 50, gap: 60 }}>
				<Title />
				<Image />
				<Flex align='center' justify='center'>
					<Button appearance='primary' css={{ width: 236 }}>
						Try for free
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Header;
