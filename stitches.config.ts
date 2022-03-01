import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import { colors } from './src/styles/colors';
export type { VariantProps } from '@stitches/react';

export const {
	styled,
	css,
	theme,
	createTheme,
	getCssText,
	globalCss,
	keyframes,
	config,
	reset,
} = createStitches({
	theme: {
		colors,
		fontSizes: {
			1: '12px',
			2: '15px',
			3: '16px',
			4: '18px',
			5: '22px',
			6: '46px',
			7: '55px',
		},
		radii: {
			1: '4px',
			2: '6px',
			3: '8px',
			4: '12px',
			round: '50%',
			pill: '9999px',
		},
		zIndices: {
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			max: '5',
		},
	},
	media: {
		mobileS: '(min-width: 320px)',
		mobileM: '(min-width: 375px)',
		mobileL: '(min-width: 425px)',
		tablet: '(min-width: 768px)',
		laptop: '(min-width: 1024px)',
		laptopL: '(min-width: 1440px)',
		hover: '(any-hover: hover)',
		dark: '(prefers-color-scheme: dark)',
		light: '(prefers-color-scheme: light)',
	},
	utils: {
		// Padding
		p: (value: Stitches.PropertyValue<'padding'>) => ({ padding: value }),
		pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
			paddingTop: value,
		}),
		pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
			paddingRight: value,
		}),
		pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
			paddingBottom: value,
		}),
		pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
			paddingLeft: value,
		}),
		px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		py: (value: Stitches.PropertyValue<'padding'>) => ({
			paddingTop: value,
			paddingBottom: value,
		}),

		// Margin
		m: (value: Stitches.PropertyValue<'margin'>) => ({
			margin: value,
		}),
		mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
			marginTop: value,
		}),
		mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
			marginRight: value,
		}),
		mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
			marginBottom: value,
		}),
		ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
			marginLeft: value,
		}),
		mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
			marginLeft: value,
			marginRight: value,
		}),
		my: (value: Stitches.PropertyValue<'marginTop'>) => ({
			marginTop: value,
			marginBottom: value,
		}),

		// Text align
		ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

		// Display
		d: (value: Stitches.PropertyValue<'display'>) => ({
			display: value,
		}),
		fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
			flexDirection: value,
		}),
		fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

		ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
			alignItems: value,
		}),
		ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
			alignContent: value,
		}),
		jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
			justifyContent: value,
		}),
		as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
		fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
		fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
			flexShrink: value,
		}),
		fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

		// Color
		c: (value: Stitches.PropertyValue<'color'>) => ({ color: value }),

		// Background color
		bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
			backgroundColor: value,
		}),

		// Border radius
		br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
			borderRadius: value,
		}),
		btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
			borderTopRightRadius: value,
		}),
		bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
			borderBottomRightRadius: value,
		}),
		btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
			borderTopLeftRadius: value,
		}),
		bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
			borderBottomLeftRadius: value,
		}),

		// Box shadow
		bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

		// Line height
		lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
			lineHeight: value,
		}),

		// Overflow
		ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
		oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

		// Width & height
		size: (value: Stitches.PropertyValue<'width'>) => ({
			width: value,
			height: value,
		}),
	},
});

export type CSS = Stitches.CSS<typeof config>;

const globalStyles = globalCss({
	'@font-face': [
		{
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: '100',
			src: "url('assets/fonts/Roboto-Thin.ttf') format('truetype')",
		},
	],
	'*, *::before, *::after': {
		boxSizing: 'border-box',
		margin: 0,
	},
	body: { fontFamily: 'Roboto' },
});

globalStyles();
