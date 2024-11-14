import { useRef, useState } from "react";
import Editor from "../editor/index.js";
import Mermaid from "../mermaid/index.js";

type MermaidEditorProperties = {
	readonly initialValue?: string;
};

function MermaidEditor({ initialValue }: MermaidEditorProperties) {
	const [value, setValue] = useState(initialValue ?? "");
	const mermaidElement = useRef<HTMLPreElement>(null);

	const handleModelOnChange = (incomingValue: string) => {
		setValue(incomingValue);
	};

	const downloadDiagram = () => {
		if (!mermaidElement.current) throw new Error("Element not ready");
		const svg = mermaidElement.current.querySelector("svg");

		if (!svg) throw new Error("SVG not found");
		const svgData = new XMLSerializer().serializeToString(svg);

		const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
		const url = URL.createObjectURL(blob);

		const link = document.createElement("a");
		link.href = url;
		link.download = "diagram.svg";
		document.body.append(link);
		link.click();
		link.remove();
		URL.revokeObjectURL(url);
	};

	return (
		<div
			style={{
				display: "flex",
				height: "100vh",
				maxHeight: "100vh",
				flexDirection: "column",
			}}
		>
			<div
				style={{
					flexGrow: 1,
					display: "flex",
				}}
			>
				<div style={{ width: "50%" }}>
					<Editor initialValue={initialValue} onChange={handleModelOnChange} />
				</div>
				<div
					style={{
						width: "50%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						overflow: "auto",
					}}
				>
					<div
						style={{
							width: "75%",
						}}
					>
						<Mermaid ref={mermaidElement} diagram={value} />
					</div>
				</div>
			</div>
			<div>
				<button
					type="button"
					style={{
						fontSize: "2rem",
						width: "100%",
					}}
					onClick={downloadDiagram}
				>
					Download
				</button>
			</div>
		</div>
	);
}

export default MermaidEditor;
