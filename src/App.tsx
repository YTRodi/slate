import { Box } from '@/components';
import { Navbar, Header, Feature } from '@/components/Layout';

function App() {
	return (
		<>
			<Box css={{ background: '$backgroundGradient' }}>
				<Navbar />
				<Header />
			</Box>

			<Feature />
		</>
	);
}

export default App;
