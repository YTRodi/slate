import { styled } from 'stitches.config';

export default styled('div', {
	d: 'flex',

	variants: {
		direction: {
			row: { fd: 'row' },
			column: { fd: 'column' },
			rowReverse: { fd: 'row-reverse' },
			columnReverse: { fd: 'column-reverse' },
		},
		align: {
			start: { ai: 'flex-start' },
			center: { ai: 'center' },
			end: { ai: 'flex-end' },
			stretch: { ai: 'stretch' },
			baseline: { ai: 'baseline' },
		},
		justify: {
			start: { jc: 'flex-start' },
			center: { jc: 'center' },
			end: { jc: 'flex-end' },
			between: { jc: 'space-between' },
		},
		wrap: {
			noWrap: { fw: 'nowrap' },
			wrap: { fw: 'wrap' },
			wrapReverse: { fw: 'wrap-reverse' },
		},
	},

	defaultVariants: {
		direction: 'row',
		align: 'stretch',
		justify: 'start',
		wrap: 'noWrap',
	},
});
