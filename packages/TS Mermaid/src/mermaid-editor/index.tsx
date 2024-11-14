import { useState } from "react";
import Editor from "../editor/index.js";
import Mermaid from "../mermaid/index.js";

function MermaidEditor() {
	const [value, setValue] = useState("");

	const handleModelOnChange = (incomingValue: string) => {
		setValue(incomingValue);
	};

	return (
		<div
			style={{
				display: "flex",
				gap: "1rem",
				width: "100%",
				height: "100vh",
			}}
		>
			<div style={{ width: "50%" }}>
				<Editor onChange={handleModelOnChange} />
			</div>
			<div style={{ width: "50%" }}>
				<Mermaid diagram={value} />
			</div>
		</div>
	);
}

export default MermaidEditor;
