import { useState } from "react";
import Editor from "../editor/index.js";
import Mermaid from "../mermaid/index.js";

type MermaidEditorProperties = {
	readonly initialValue?: string;
};

function MermaidEditor({ initialValue }: MermaidEditorProperties) {
	const [value, setValue] = useState(initialValue ?? "");

	const handleModelOnChange = (incomingValue: string) => {
		setValue(incomingValue);
	};

	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				height: "100vh",
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
				}}
			>
				<div
					style={{
						width: "75%",
					}}
				>
					<Mermaid diagram={value} />
				</div>
			</div>
		</div>
	);
}

export default MermaidEditor;
