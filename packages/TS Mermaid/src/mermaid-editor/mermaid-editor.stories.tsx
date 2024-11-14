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

const userJourneyDiagramInitialValue = `
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
`;

const UserJourneyDiagram = {
	args: {
		initialValue: userJourneyDiagramInitialValue,
	},
};

const ganttDiagramInitialValue = `
gantt
    title A Gantt Diagram
    dateFormat YYYY-MM-DD
    section Section
        A task          :a1, 2014-01-01, 30d
        Another task    :after a1, 20d
    section Another
        Task in Another :2014-01-12, 12d
        another task    :24d
`;

const GanttDiagram = {
	args: {
		initialValue: ganttDiagramInitialValue,
	},
};

const pieChartDiagramInitialValue = `
pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
`;

const PieChartDiagram = {
	args: {
		initialValue: pieChartDiagramInitialValue,
	},
};

const quadrantChartInitialValue = `
quadrantChart
    title Reach and engagement of campaigns
    x-axis Low Reach --> High Reach
    y-axis Low Engagement --> High Engagement
    quadrant-1 We should expand
    quadrant-2 Need to promote
    quadrant-3 Re-evaluate
    quadrant-4 May be improved
    Campaign A: [0.3, 0.6]
    Campaign B: [0.45, 0.23]
    Campaign C: [0.57, 0.69]
    Campaign D: [0.78, 0.34]
    Campaign E: [0.40, 0.34]
    Campaign F: [0.35, 0.78]
`;

const QuadrantChart = {
	args: {
		initialValue: quadrantChartInitialValue,
	},
};

const requirementDiagramInitialValue = `
    requirementDiagram

    requirement test_req {
    id: 1
    text: the test text.
    risk: high
    verifymethod: test
    }

    element test_entity {
    type: simulation
    }

    test_entity - satisfies -> test_req
`;

const RequirementDiagram = {
	args: {
		initialValue: requirementDiagramInitialValue,
	},
};

const gitGraphDiagramInitialValue = `
---
title: Example Git diagram
---
gitGraph
   commit
   commit
   branch develop
   checkout develop
   commit
   commit
   checkout main
   merge develop
   commit
   commit
`;

const GitGraphDiagram = {
	args: {
		initialValue: gitGraphDiagramInitialValue,
	},
};

const mindMapInitialValue = `
mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectiveness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid

`;

const MindMap = {
	args: {
		initialValue: mindMapInitialValue,
	},
};

const timelineDiagramInitialValue = `
timeline
    title History of Social Media Platform
    2002 : LinkedIn
    2004 : Facebook
         : Google
    2005 : Youtube
    2006 : Twitter
`;

const TimelineDiagram = {
	args: {
		initialValue: timelineDiagramInitialValue,
	},
};

const sankeyDiagramInitialValue = `
sankey-beta

%% source,target,value
Electricity grid,Over generation / exports,104.453
Electricity grid,Heating and cooling - homes,113.726
Electricity grid,H2 conversion,27.14
`;

const SankeyDiagram = {
	args: {
		initialValue: sankeyDiagramInitialValue,
	},
};

const xyChartInitialValue = `
xychart-beta
    title "Sales Revenue"
    x-axis [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
    y-axis "Revenue (in $)" 4000 --> 11000
    bar [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
    line [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const XYChart = {
	args: {
		initialValue: xyChartInitialValue,
	},
};

const blockDiagramInitialValue = `
block-beta
columns 1
  db(("DB"))
  blockArrowId6<["&nbsp;&nbsp;&nbsp;"]>(down)
  block:ID
    A
    B["A wide one in the middle"]
    C
  end
  space
  D
  ID --> D
  C --> D
  style B fill:#969,stroke:#333,stroke-width:4px
`;

const BlockDiagram = {
	args: {
		initialValue: blockDiagramInitialValue,
	},
};

const packetDiagramInitialValue = `
---
title: "TCP Packet"
---
packet-beta
0-15: "Source Port"
16-31: "Destination Port"
32-63: "Sequence Number"
64-95: "Acknowledgment Number"
96-99: "Data Offset"
100-105: "Reserved"
106: "URG"
107: "ACK"
108: "PSH"
109: "RST"
110: "SYN"
111: "FIN"
112-127: "Window"
128-143: "Checksum"
144-159: "Urgent Pointer"
160-191: "(Options and Padding)"
192-255: "Data (variable length)"
`;

const PacketDiagram = {
	args: {
		initialValue: packetDiagramInitialValue,
	},
};

const kanbanDiagramInitialValue = `
---
config:
  kanban:
    ticketBaseUrl: 'https://mermaidchart.atlassian.net/browse/#TICKET#'
---
kanban
  Todo
    [Create Documentation]
    docs[Create Blog about the new diagram]
  [In progress]
    id6[Create renderer so that it works in all cases. We also add som extra text here for testing purposes. And some more just for the extra flare.]
  id9[Ready for deploy]
    id8[Design grammar]@{ assigned: 'knsv' }
  id10[Ready for test]
    id4[Create parsing tests]@{ ticket: MC-2038, assigned: 'K.Sveidqvist', priority: 'High' }
    id66[last item]@{ priority: 'Very Low', assigned: 'knsv' }
  id11[Done]
    id5[define getData]
    id2[Title of diagram is more than 100 chars when user duplicates diagram with 100 char]@{ ticket: MC-2036, priority: 'Very High'}
    id3[Update DB function]@{ ticket: MC-2037, assigned: knsv, priority: 'High' }

  id12[Can't reproduce]
    id3[Weird flickering in Firefox]
`;

const KanbanDiagram = {
	args: {
		initialValue: kanbanDiagramInitialValue,
	},
};

const architectureDiagramInitialValue = `
architecture-beta
    group api(cloud)[API]

    service db(database)[Database] in api
    service disk1(disk)[Storage] in api
    service disk2(disk)[Storage] in api
    service server(server)[Server] in api

    db:L -- R:server
    disk1:T -- B:server
    disk2:T -- B:db
`;

const ArchitectureDiagram = {
	args: {
		initialValue: architectureDiagramInitialValue,
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
	UserJourneyDiagram,
	GanttDiagram,
	PieChartDiagram,
	QuadrantChart,
	RequirementDiagram,
	GitGraphDiagram,
	MindMap,
	TimelineDiagram,
	SankeyDiagram,
	XYChart,
	BlockDiagram,
	PacketDiagram,
	KanbanDiagram,
	ArchitectureDiagram,
};
