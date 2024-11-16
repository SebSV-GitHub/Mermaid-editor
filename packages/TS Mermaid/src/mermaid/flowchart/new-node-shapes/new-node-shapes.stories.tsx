import type { Meta, StoryObj } from "@storybook/react";
import Mermaid from "../../index.js";
import cardShape from "./card.mmd?raw";
import collateShape from "./collate.mmd?raw";

enum Shapes {
	CARD = "Card",
	COLLATE = "Collate",
}

type ShapesObject = {
	[k in Shapes as string]: string;
};

const shapes: ShapesObject = {
	[Shapes.CARD]: cardShape,
	[Shapes.COLLATE]: collateShape,
};

type Story = StoryObj<typeof Mermaid>;

const story: Meta<typeof Mermaid> = {
	component: Mermaid,
	title: "Mermaid/Flowchart/New node shapes",
	argTypes: {
		diagram: {
			type: {
				name: "enum",
				value: Object.values(Shapes),
			},
			options: Object.values(Shapes),
			control: { type: "select" },
		},
	},
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
	render({ diagram }) {
		return <Mermaid diagram={shapes[diagram]} />;
	},
	args: {
		diagram: Shapes.CARD,
	},
};

export default story;
export { Default };
