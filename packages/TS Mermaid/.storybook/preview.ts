import type { Preview } from "@storybook/react";

const preview: Preview = {
	parameters: {
		layout: "fullscreen",
		backgrounds: {
			values: [
				{
					name: "Light",
					value: "#f5f5f5",
				},
			],
			default: "Light",
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
