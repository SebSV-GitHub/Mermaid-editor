import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({ startOnLoad: false });

type MermaidProperties = {
	readonly diagram: string;
};

function Mermaid({ diagram }: MermaidProperties) {
	const preElement = useRef<HTMLPreElement | null>(null); // eslint-disable-line @typescript-eslint/ban-types

	useEffect(() => {
		if (preElement.current) {
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
}

export default Mermaid;
