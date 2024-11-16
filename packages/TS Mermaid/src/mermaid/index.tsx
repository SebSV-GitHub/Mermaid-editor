import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import mermaid from "mermaid";
import themeCSS from "./theme.css?raw";

mermaid.initialize({
	startOnLoad: false,
	flowchart: {},
	class: {
		hideEmptyMembersBox: true,
	},
	theme: "base",
	themeVariables: {
		primaryColor: "#FFF",
		primaryTextColor: "#4C5566",
		primaryBorderColor: "#EEF2F6",
		lineColor: "#A2AEBE",
	},
	themeCSS, // eslint-disable-line @typescript-eslint/naming-convention
});

type MermaidProps = {
	readonly diagram: string;
};

const Mermaid = forwardRef<HTMLPreElement, MermaidProps>(({ diagram }, ref) => {
	const preElement = useRef<HTMLPreElement>(null);

	useImperativeHandle(ref, () => preElement.current!);

	useEffect(() => {
		if (preElement?.current) {
			delete preElement.current.dataset.processed;
		}

		(async () => {
			await mermaid.run();
		})();
	}, [diagram]);

	return (
		<pre ref={preElement} className="mermaid">
			{diagram}
		</pre>
	);
});

export default Mermaid;
export type { MermaidProps };
