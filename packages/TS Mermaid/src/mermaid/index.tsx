import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
	startOnLoad: false,
	class: {
		hideEmptyMembersBox: true,
	},
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
