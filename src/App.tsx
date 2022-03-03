import { Box, Navbar, Header, Feature, Hero } from '@/components';

function App() {
	return (
		<>
			<Box css={{ background: '$backgroundGradient' }}>
				<Navbar />
				<Header />
			</Box>

			<Feature />
			<Hero />
		</>
	);
}

export default App;
