import type { Meta, StoryObj } from "@storybook/react";
import Mermaid from "../../index.js";
import defaultShape from "./default.mmd?raw";
import roundEdgesShape from "./round-edges.mmd?raw";
import stadiumShape from "./stadium.mmd?raw";
import subroutineShape from "./subroutine.mmd?raw";
import cylindricalShape from "./cylindrical.mmd?raw";
import circleShape from "./circle.mmd?raw";
import asymmetricShape from "./asymmetric.mmd?raw";
import rhombusShape from "./rhombus.mmd?raw";
import hexagonShape from "./hexagon.mmd?raw";
import parallelogramShape from "./parallelogram.mmd?raw";
import parallelogramAlternativeShape from "./parallelogram-alternative.mmd?raw";
import trapezoidShape from "./trapezoid.mmd?raw";
import trapezoidAlternativeShape from "./trapezoid-alternative.mmd?raw";
import doubleCircleShape from "./double-circle.mmd?raw";

type Story = StoryObj<typeof Mermaid>;

const story: Meta<typeof Mermaid> = {
	component: Mermaid,
	title: "Mermaid/Flowchart/Shapes",
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
		diagram: defaultShape,
	},
};

const RoundEdges: Story = {
	args: {
		diagram: roundEdgesShape,
	},
};

const Stadium: Story = {
	args: {
		diagram: stadiumShape,
	},
};

const Subroutine: Story = {
	args: {
		diagram: subroutineShape,
	},
};

const Cylindrical: Story = {
	args: {
		diagram: cylindricalShape,
	},
};

const Circle: Story = {
	args: {
		diagram: circleShape,
	},
};

const Asymmetric: Story = {
	args: {
		diagram: asymmetricShape,
	},
};

const Rhombus: Story = {
	args: {
		diagram: rhombusShape,
	},
};

const Hexagon: Story = {
	args: {
		diagram: hexagonShape,
	},
};

const Parallelogram: Story = {
	args: {
		diagram: parallelogramShape,
	},
};

const ParallelogramAlternative: Story = {
	args: {
		diagram: parallelogramAlternativeShape,
	},
};

const Trapezoid: Story = {
	args: {
		diagram: trapezoidShape,
	},
};

const TrapezoidAlternative: Story = {
	args: {
		diagram: trapezoidAlternativeShape,
	},
};

const DoubleCircle: Story = {
	args: {
		diagram: doubleCircleShape,
	},
};

export default story;
export {
	Default,
	RoundEdges,
	Stadium,
	Subroutine,
	Cylindrical,
	Circle,
	Asymmetric,
	Rhombus,
	Hexagon,
	Parallelogram,
	ParallelogramAlternative,
	Trapezoid,
	TrapezoidAlternative,
	DoubleCircle,
};
