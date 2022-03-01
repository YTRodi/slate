import { Box } from '@/components';
import { Hero, Navbar } from '@/components/Layout';

function App() {
	return (
		<>
			<Box css={{ background: '$backgroundGradient' }}>
				<Navbar />
				<Hero />
			</Box>
		</>
	);
}

export default App;
