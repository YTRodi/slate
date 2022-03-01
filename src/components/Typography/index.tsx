import { ComponentPropsWithoutRef } from 'react';
import Text from '@/components/Text';
import { CSS, VariantProps } from 'stitches.config';

type TextVariants = VariantProps<typeof Text>;

type HeadingProps = Omit<
	ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5'>,
	'color' | 'style'
> &
	TextVariants & { css?: CSS; as?: any };
type ParagraphProps = ComponentPropsWithoutRef<'p'> &
	TextVariants & { css?: CSS; as?: any };
type SpanProps = ComponentPropsWithoutRef<'span'> &
	TextVariants & { css?: CSS; as?: any };

const Title = (props: HeadingProps) => <Text as='h1' size='9' {...props} />;
const Subtitle = (props: HeadingProps) => <Text as='h2' size='8' {...props} />;
const Heading = (props: HeadingProps) => <Text as='h3' size='6' {...props} />;
const Subheading = (props: HeadingProps) => (
	<Text as='h4' size='4' {...props} />
);
const Body = (props: ParagraphProps) => <Text as='p' size='5' {...props} />;
const ButtonText = (props: SpanProps) => <Text as='span' size='3' {...props} />;
const LinkText = (props: SpanProps) => <Text as='span' size='2' {...props} />;

export { Title, Subtitle, Heading, Subheading, Body, ButtonText, LinkText };
