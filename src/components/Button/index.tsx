import { styled } from 'stitches.config';

export default styled('button', {
	all: 'unset',
	ta: 'center',
	userSelect: 'none',
	borderRadius: '$pill',

	'&:hover': { cursor: 'pointer' },

	variants: {
		appearance: {
			primary: {
				height: 65,
				backgroundColor: '$tertiary',
				color: '$textLight',

				// H3
				fontSize: '$5',
				fontWeight: 'bold',
				lineHeight: '33px',
				letterSpacing: 0.1,
			},
			secondary: {
				height: 50,
				backgroundColor: '$primary',
				color: '$textLight',

				// span (Button)
				fontSize: '$3',
				fontWeight: 500,
				lineHeight: '16px',
				letterSpacing: 0.2,
			},
		},
	},

	defaultVariants: {
		appearance: 'primary',
	},
});
