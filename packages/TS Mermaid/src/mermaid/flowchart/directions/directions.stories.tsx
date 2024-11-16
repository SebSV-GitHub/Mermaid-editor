import type { Meta, StoryObj } from "@storybook/react";
import Mermaid from "../../index.js";
import tbDirection from "./tb.mmd?raw";
import tdDirection from "./td.mmd?raw";
import btDirection from "./bt.mmd?raw";
import rlDirection from "./rl.mmd?raw";
import lrDirection from "./lr.mmd?raw";

type Story = StoryObj<typeof Mermaid>;

const story: Meta<typeof Mermaid> = {
	component: Mermaid,
	title: "Mermaid/Flowchart/Directions",
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

const TopToBottom: Story = {
	args: {
		diagram: tbDirection,
	},
};

const TopDown: Story = {
	args: {
		diagram: tdDirection,
	},
};

const BottomToTop: Story = {
	args: {
		diagram: btDirection,
	},
};

const RightToLeft: Story = {
	args: {
		diagram: rlDirection,
	},
};

const LeftToRight: Story = {
	args: {
		diagram: lrDirection,
	},
};

export default story;
export { TopToBottom, TopDown, BottomToTop, RightToLeft, LeftToRight };
