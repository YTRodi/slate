import Logo from '@/components/Layout/Logo';
import {
	Navbar as StyledNavbar,
	LogoContainer,
	BugerMenuContainer,
	HamburgerMenuIcon,
} from './styles';

const Navbar = () => {
	return (
		<StyledNavbar>
			<LogoContainer>
				<Logo />
			</LogoContainer>

			<BugerMenuContainer>
				<HamburgerMenuIcon />
			</BugerMenuContainer>
		</StyledNavbar>
	);
};

export default Navbar;
