import React, { useRef, useEffect, useLayoutEffect } from "react";
import { Handle, type NodeProps, Position } from "reactflow";

import useStore from "@/store";

export type NodeData = {
  label: string;
};

function MindMapNode({ id, data }: NodeProps<NodeData>) {
  const inputRef = useRef<HTMLInputElement | undefined>();
  const updateNodeLabel = useStore((state) => state.updateNodeLabel);

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = `${data.label.length * 8}px`;
    }
  }, [data.label.length]);

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true });
      }
    }, 1);
  }, []);

  return (
    <>
      {/* <div className="z-1 pointer-events-none relative flex h-[20px]"> */}
      {/* <div className="align-items-center pointer-events-auto mr-4 flex h-full w-[14px] bg-transparent"> */}
      <div className="inputWrapper">
        <div className="dragHandle">
          {/* icon taken from grommet https://icons.grommet.io */}
          <svg viewBox="0 0 24 24">
            <path
              fill="#333"
              stroke="#333"
              strokeWidth="1"
              d="M15 5h2V3h-2v2zM7 5h2V3H7v2zm8 8h2v-2h-2v2zm-8 0h2v-2H7v2zm8 8h2v-2h-2v2zm-8 0h2v-2H7v2z"
            />
          </svg>
        </div>
        <input
          value={data.label}
          onChange={(evt) => updateNodeLabel(id, evt.target.value)}
          //   className="background-transparent pointer-events-none h-full border-0 border-r-2 py-2 font-semibold"
          className="input"
          ref={inputRef}
        />
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Top} />
    </>
  );
}

export default MindMapNode;
