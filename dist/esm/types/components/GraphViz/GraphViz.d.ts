import { FC } from "react";
export declare const useStyles: (data?: {
    theme?: Jss.Theme | undefined;
} | undefined) => import("jss").Classes<"graph">;
interface Props {
    dotGraphData?: string;
    onNodeClick?: (self: any) => void;
    onEdgeClick?: (self: any) => void;
}
declare const ReusableGraph: FC<Props>;
export default ReusableGraph;
