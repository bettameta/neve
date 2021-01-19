import { useState } from '@wordpress/element';
import RadioIcons from '../inc/customizer/controls/react/src/common/RadioIcons';
import {
	CustomizerDecorator,
	WhiteBackgroundDecorator,
} from './components/decorators';
import {
	chevronDown,
	chevronUp,
	chevronRight,
	chevronLeft,
} from '@wordpress/icons';

export default {
	title: 'Customizer/Radio Icons',
	component: RadioIcons,
	args: {
		label: 'Control Label',
		options: {
			one: { icon: 'text', tooltip: 'One' },
			two: { icon: 'text', tooltip: 'Two' },
			three: { icon: 'text', tooltip: 'Three' },
			four: { icon: 'text', tooltip: 'Four' },
		},
		showLabels: false,
	},
	argTypes: {
		onChange: { table: { disable: true } },
		value: { table: { disable: true } },
		options: { control: 'object' },
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const Template = (args) => {
	const [value, setValue] = useState(Object.keys(args.options)[0]);

	return (
		<>
			<RadioIcons value={value} {...args} onChange={setValue} />
			<hr />
			<br />
			<strong>Value:</strong>
			<pre>{value}</pre>
		</>
	);
};

export const Text = Template.bind({});
export const IncludedIcons = Template.bind({});
IncludedIcons.args = {
	options: {
		1: {
			icon: 'logoOnly',
			tooltip: 'Logo Only',
		},
		2: {
			icon: 'logoTopTitle',
			tooltip: 'Logo on Title',
		},
		3: {
			icon: 'logoTitle',
			tooltip: 'Logo & Title',
		},
		4: {
			icon: 'titleLogo',
			tooltip: 'Title & Logo',
		},
	},
};
export const IncludedIconsWithLabels = Template.bind({});
IncludedIconsWithLabels.args = {
	...IncludedIcons.args,
	showLabels: true,
};

export const Markup = Template.bind({});
Markup.args = {
	options: {
		Down: { icon: chevronDown, tooltip: 'Down' },
		Up: { icon: chevronUp, tooltip: 'Up' },
		Right: { icon: chevronRight, tooltip: 'Right' },
		Left: { icon: chevronLeft, tooltip: 'Left' },
	},
};

Markup.argTypes = {
	options: { table: { disable: true } },
};

export const WithLabels = Markup.bind({});
WithLabels.args = {
	...Markup.args,
	showLabels: true,
};

WithLabels.argTypes = Markup.argTypes;
