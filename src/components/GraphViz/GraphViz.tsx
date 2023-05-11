import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { FC, useMemo, useRef } from "react";
import { select, selectAll } from "d3";
import { graphviz } from "d3-graphviz";
import { attributer } from "./helpers";

export const useStyles = createUseStyles({
  graph: {
    width: "100%",
    height: "calc(100vh - 64px)",
    backgroundColor: "#fff",
    textAlign: "center",

    "& svg": {
      height: "100% !important",
    },
    "& .node, & .edge": {
      cursor: "pointer",
      "&.hide": {
        opacity: 0.1,
      },
    },
    "& .node ellipse": {
      fill: "#3c97cb",
      stroke: "transparent",
    },
    "& .node text": {
      fill: "#fff",
    },
    "& .node.terminal ellipse": {
      fill: "#ca2128",
      stroke: "transparent",
    },
    "& .node.terminal text": {
      fill: "#fff",
    },
    "& .node.init ellipse": {
      fill: "#f8cc08",
      stroke: "transparent",
    },
    "& .node.init text": {
      fill: "#000",
    },
    "& .node.frontier ellipse": {
      fill: "#33904d",
      stroke: "transparent",
    },
    "& .node.frontier text": {
      fill: "#fff",
    },
    "& .node.target ellipse": {
      fill: "#2e4e82",
      stroke: "transparent",
    },
    "& .node.target text": {
      fill: "#fff",
    },
    "& .node.loop ellipse": {
      fill: "#9b379b",
      stroke: "transparent",
    },
    "& .node.loop text": {
      fill: "#fff",
    },
    "& .node.split ellipse": {
      fill: "#420a1c",
      stroke: "transparent",
    },
    "& .node.split text": {
      fill: "#fff",
    },
    "& .edge path": {
      stroke: "#b03a25",
    },
    "& .edge polygon": {
      stroke: "#b03a25",
      fill: "#b03a25",
    },
    "& .edge.abstraction path": {
      stroke: "#000",
    },
    "& .edge.abstraction polygon": {
      stroke: "#000",
      fill: "#000",
    },
    "& .edge text": {
      fill: "#000",
    },
    "& .edge.verified path": {
      stroke: "#21ad57",
    },
    "& .edge.verified polygon": {
      fill: "#21ad57",
      stroke: "#21ad57",
    },
    "& .edge.target path": {
      stroke: "#541ec9",
    },
    "& .edge.target polygon": {
      fill: "#541ec9",
      stroke: "#541ec9",
    },
    "& .edge:hover path": {
      strokeWidth: 3,
    },
    "& .node:hover text, & .edge:hover text": {
      fontWeight: "bold",
    },
    "& .edge.abstraction:hover path": {
      strokeWidth: 3,
    },
    "& .edge.abstraction:hover text": {
      fontWeight: "bold",
    },
  },
});
type Props = {
  dotGraphData?: string;
  onNodeClick?: (self: any) => void;
  onEdgeClick?: (self: any) => void;
};

const ReusableGraph: FC<Props> = ({
  dotGraphData,
  onNodeClick,
  onEdgeClick,
}) => {
  const classes = useStyles();
  const graphEl = useRef<HTMLDivElement>(null);

  const initializeGraph = async (dotGraph: string, id: string) => {
    const _id = `#${id}`;

    if (!select(_id).size()) return;
    graphviz(_id, {
      tweenShapes: false,
      tweenPaths: false,
      convertEqualSidedPolygons: false,
      useWorker: false,
    })
      .fit(false)
      .attributer(attributer)
      .renderDot(dotGraph)
      .on("end", () => {
        selectAll(`.node`).on("click", function () {
          const self = select(this);
          onNodeClick(self);
        });
        selectAll(`.edge`).on("click", function () {
          const self = select(this);
          onEdgeClick(self);
        });
      });
  };

  useMemo(() => {
    dotGraphData && initializeGraph(dotGraphData, "graph");
  }, [dotGraphData]);
  return (
    <div>
      <div
        className={classNames(classes.graph, "w-full h-screen")}
        ref={graphEl}
        id="graph"
      />
    </div>
  );
};

export default ReusableGraph;
