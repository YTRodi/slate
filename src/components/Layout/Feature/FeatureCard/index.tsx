import { GearIcon as GIcon } from '@radix-ui/react-icons';
import { Box, Flex, Heading, Body } from '@/components';
import { FeatureProps } from '../';
import { styled } from 'stitches.config';

const GearIcon = styled(GIcon, {});

const FeatureCard = ({ title, body }: FeatureProps) => {
	return (
		<Box css={{ px: 7.5 }}>
			<Flex>
				<Flex justify='center' align='center'>
					<Flex
						justify='center'
						align='center'
						css={{
							backgroundColor: '$primary',
							size: 43,
							borderRadius: '$round',
						}}
					>
						<GearIcon css={{ color: '$textLight' }} />
					</Flex>
				</Flex>
				<Box css={{ p: 10 }}>
					<Heading>{title}</Heading>
				</Box>
			</Flex>

			<Box css={{ py: 10 }}>
				<Body>{body}</Body>
			</Box>
		</Box>
	);
};

export default FeatureCard;
