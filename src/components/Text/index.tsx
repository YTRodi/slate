import { styled } from 'stitches.config';

export default styled('span', {
	fontVariantNumeric: 'tabular-nums',
	variants: {
		size: {
			// H5
			1: {
				fontSize: '$1',
				lineHeight: '18px',
				letterSpacing: 0.1,
			},
			// Link
			2: {
				fontSize: '$2',
				lineHeight: '27px',
				letterSpacing: 0.2,
			},
			// Button
			3: {
				fontSize: '$3',
				fontWeight: 500,
				lineHeight: '16px',
				letterSpacing: 0.2,
			},
			// H4
			4: {
				fontSize: '$3',
				fontWeight: 'bold',
				lineHeight: '20px',
				letterSpacing: 0.2,
			},
			// Paragraph
			5: {
				fontSize: '$4',
				lineHeight: '27px',
				letterSpacing: 0.2,
			},
			// H3
			6: {
				fontSize: '$5',
				fontWeight: 'bold',
				lineHeight: '33px',
				letterSpacing: 0.1,
			},
			// Mobile menu
			7: {
				fontSize: '$6',
				lineHeight: '45px',
				letterSpacing: 0.2,
			},
			// H2
			8: {
				fontSize: '$7',
				lineHeight: '57px',
				letterSpacing: 0.2,
			},
			// H1
			9: {
				fontSize: '$8',
				fontWeight: 900,
				lineHeight: '65px',
				letterSpacing: 0.2,
			},
		},
		color: {
			primary: { color: '$primary' },
			secondary: { color: '$secondary' },
			tertiary: { color: '$tertiary' },
			text: { color: '$text' },
			textSecond: { color: '$textSecond' },
			textLight: { color: '$textLight' },
		},
		style: {
			normal: { fontStyle: 'normal' },
			italic: { fontStyle: 'italic' },
			oblique: { fontStyle: 'oblique' },
		},
	},
	defaultVariants: {
		size: '4',
		color: 'text',
		style: 'normal',
	},
});
