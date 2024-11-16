import type { Meta, StoryObj } from "@storybook/react";
import Mermaid from "../index.js";
import diagram from "./diagram.mmd?raw";

type Story = StoryObj<typeof Mermaid>;

const story: Meta<typeof Mermaid> = {
	component: Mermaid,
	title: "Mermaid/Flowchart",
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
