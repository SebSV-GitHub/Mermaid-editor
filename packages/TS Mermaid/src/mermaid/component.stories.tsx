import Mermaid from "./index.js";

const diagram = `
erDiagram
          CUSTOMER }|..|{ DELIVERY-ADDRESS : has
          CUSTOMER ||--o{ ORDER : places
          CUSTOMER ||--o{ INVOICE : "liable for"
          DELIVERY-ADDRESS ||--o{ ORDER : receives
          INVOICE ||--|{ ORDER : covers
          ORDER ||--|{ ORDER-ITEM : includes
          PRODUCT-CATEGORY ||--|{ PRODUCT : contains
          PRODUCT ||--o{ ORDER-ITEM : "ordered in"
`;

const story = {
	component: Mermaid,
	title: "Mermaid",
	parameters: {
		layout: "centered",
	},
	args: {
		diagram,
	},
};

export const Default = {};

export default story;
