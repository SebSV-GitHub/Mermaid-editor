import MermaidEditor from "./index.js";

const story = {
	component: MermaidEditor,
	title: "Mermaid editor",
};

const Default = {};

const flowCharInitialValue = `
flowchart TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end

`;
const FlowChart = {
	args: {
		initialValue: flowCharInitialValue,
	},
};

const sequenceDiagramInitialValue = `
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
`;

const SequenceDiagram = {
	args: {
		initialValue: sequenceDiagramInitialValue,
	},
};

const classDiagramInitialValue = `
---
title: Animal example
---
classDiagram
    note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
`;

const ClassDiagram = {
	args: {
		initialValue: classDiagramInitialValue,
	},
};

const stateDiagramInitialValue = `
---
title: Simple sample
---
stateDiagram-v2
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
`;

const StateDiagram = {
	args: {
		initialValue: stateDiagramInitialValue,
	},
};

const entityRelationshipDiagramInitialValue = `
---
title: Order example
---
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
`;

const EntityRelationshipDiagram = {
	title: "Entity Relationship Diagrams",
	args: {
		initialValue: entityRelationshipDiagramInitialValue,
	},
};

export default story;
export {
	Default,
	FlowChart,
	SequenceDiagram,
	ClassDiagram,
	StateDiagram,
	EntityRelationshipDiagram,
};
