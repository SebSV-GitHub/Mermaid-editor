import { useRef, useEffect } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import configureMermaidIntoMonaco from "./utils/mermaid.js";

type EditorProperties = {
	readonly onChange: (value: string) => void;
	readonly initialValue?: string;
};

function Editor({ onChange, initialValue }: EditorProperties) {
	const monacoElement = useRef(null);
	const editor = useRef<monaco.editor.IStandaloneCodeEditor | undefined>(
		undefined
	);

	useEffect(() => {
		if (monacoElement.current && !editor.current) {
			configureMermaidIntoMonaco();

			editor.current = monaco.editor.create(monacoElement.current, {
				value: initialValue ?? "",
				language: "mermaid",
				theme: "mermaid-dark",
				fontSize: 16,
				minimap: {
					enabled: false,
				},
			});

			editor.current.onDidChangeModelContent(() => {
				onChange(editor.current?.getValue() ?? "");
			});
		}

		return () => editor.current?.dispose();
	}, []);

	return (
		<div
			ref={monacoElement}
			style={{
				width: "100%",
				height: "100vh",
			}}
		/>
	);
}

export default Editor;
