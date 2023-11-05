import { ReactFlowProvider } from "reactflow";
import Flow from "./Flow";

export default function ReactFlowWrapper() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
