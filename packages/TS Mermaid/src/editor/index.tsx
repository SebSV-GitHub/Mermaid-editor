import { useRef, useEffect } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

type EditorProperties = {
	readonly onChange: (value: string) => void;
};

function Editor({ onChange }: EditorProperties) {
	const monacoElement = useRef(null);
	const editor = useRef<monaco.editor.IStandaloneCodeEditor | undefined>(
		undefined
	);

	useEffect(() => {
		if (monacoElement.current && !editor.current) {
			editor.current = monaco.editor.create(monacoElement.current, {
				value: "",
				theme: "vs-dark",
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
