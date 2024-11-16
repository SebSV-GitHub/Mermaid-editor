import type { Meta, StoryObj } from "@storybook/react";
import Mermaid from "../../index.js";
import defaultNode from "./default.mmd?raw";
import textNode from "./text.mmd?raw";
import unicodeNode from "./unicode.mmd?raw";
import markdownNode from "./markdown.mmd?raw";

type Story = StoryObj<typeof Mermaid>;

const story: Meta<typeof Mermaid> = {
	component: Mermaid,
	title: "Mermaid/Flowchart/Nodes",
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
		diagram: defaultNode,
	},
};

const Text: Story = {
	args: {
		diagram: textNode,
	},
};

const Unicode: Story = {
	args: {
		diagram: unicodeNode,
	},
};

const Markdown: Story = {
	args: {
		diagram: markdownNode,
	},
};

export default story;
export { Default, Text, Unicode, Markdown };
