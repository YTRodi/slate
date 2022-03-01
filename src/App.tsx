import {
	Flex,
	Title,
	Subtitle,
	Heading,
	SubHeading,
	Body,
	ButtonText,
	LinkText,
} from '@/components';
import { Navbar } from '@/components/Layout';

function App() {
	return (
		<>
			<Navbar />
			<Flex direction='column' align='center' justify='center'>
				<Title>Title</Title>
				<Subtitle>Subtitle</Subtitle>
				<Heading>Heading</Heading>
				<SubHeading>SubHeading</SubHeading>
				<Body>Body</Body>
				<ButtonText>ButtonText</ButtonText>
				<LinkText>LinkText</LinkText>
			</Flex>
		</>
	);
}

export default App;
