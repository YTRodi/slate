import { HamburgerMenuIcon as HMIcon } from '@radix-ui/react-icons';
import { styled } from 'stitches.config';

export const Navbar = styled('nav', {
	d: 'flex',
	p: 16,
});

export const LogoContainer = styled('div', {
	flex: 1,
	d: 'flex',
	jc: 'center',
	ai: 'center',
});

export const BugerMenuContainer = styled('div', {
	flex: 1,
	c: '$textLight',
	d: 'flex',
	jc: 'flex-end',
	ai: 'center',
});

export const HamburgerMenuIcon = styled(HMIcon, {
	size: 16,
	'&:hover': { cursor: 'pointer' },
});
