import { Box } from '@/components';
import { Navbar, Hero, Feature } from '@/components/Layout';

function App() {
	return (
		<>
			<Box css={{ background: '$backgroundGradient' }}>
				<Navbar />
				<Hero />
			</Box>

			<Feature />
		</>
	);
}

export default App;
