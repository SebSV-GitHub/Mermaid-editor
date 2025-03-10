import type { Meta, StoryObj } from "@storybook/react";
import diagram from "./diagram.mmd?raw";
import Mermaid from "./index.js";

type Story = StoryObj<typeof Mermaid>;

const story: Meta<typeof Mermaid> = {
	component: Mermaid,
	title: "Mermaid",
	parameters: {
		layout: "centered",
	},
	decorators: [
		(Story) => (
			<div
				style={{
					width: "100vw",
					textAlign: "center",
				}}
			>
				<Story />
			</div>
		),
	],
};

const Default: Story = {
	args: {
		diagram,
	},
};

export default story;
export { Default };
