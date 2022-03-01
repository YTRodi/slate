import { styled } from 'stitches.config';

export default styled('span', {
	fontVariantNumeric: 'tabular-nums',
	variants: {
		size: {
			1: { fs: '$1', lh: '18px', ls: 0.1 }, // H5
			2: { fs: '$2', lh: '27px', ls: 0.2 }, // Link
			3: { fs: '$3', fontWeight: 500, lh: '16px', ls: 0.2 }, // Button
			4: { fs: '$3', fontWeight: 'bold', lh: '20px', ls: 0.2 }, // H4
			5: { fs: '$4', lh: '27px', ls: 0.2 }, // Paragraph
			6: { fs: '$5', fontWeight: 'bold', lh: '33px', ls: 0.1 }, // H3
			7: { fs: '$6', lh: '45px', ls: 0.2 }, // Mobile menu
			8: { fs: '$7', lh: '57px', ls: 0.2 }, // H2
			9: { fs: '$8', fontWeight: 900, lh: '65px', ls: 0.2 }, // H1
		},
		color: {
			primary: { color: '$primary' },
			secondary: { color: '$secondary' },
			tertiary: { color: '$tertiary' },
			text: { color: '$text' },
			textSecond: { color: '$textSecond' },
			textLight: { color: '$textLight' },
		},
	},
	defaultVariants: {
		size: '4',
		color: 'text',
	},
});
