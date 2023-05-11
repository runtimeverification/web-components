import type { Meta, StoryObj } from "@storybook/react";

import GraphViz from "./GraphViz";
import { dotGraphDataA } from "./data";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta = {
  title: "KCFGs/GraphViz",
  component: GraphViz,
  tags: ["autodocs"],
  argTypes: {
    dotGraphData: {
      name: "dotGraphData",
      description: "The dot graph data to render.",
      type: { name: "string", required: true },
    },
    onNodeClick: {
      name: "onNodeClick",
      description: "The callback to call when a node is clicked.",
      type: { name: "function", required: false },
    },
    onEdgeClick: {
      name: "onEdgeClick",
      description: "The callback to call when an edge is clicked.",
      type: { name: "function", required: false },
    },
  },
} satisfies Meta<typeof GraphViz>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const A: Story = {
  args: {
    dotGraphData: dotGraphDataA,
  },
};
