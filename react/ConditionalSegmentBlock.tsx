import type { FC } from "react";
import React from "react";
import { useRuntime } from "vtex.render-runtime";

type Props = {
  segmentParameter: string;
  segmentValue: string;
};

const ConditionalSegmentBlock: FC<Props> = ({
  segmentParameter,
  segmentValue,
  children,
}) => {
  console.log("segmentParameter", segmentParameter);
  console.log("segmentValue", segmentValue);
  const runtime = useRuntime();

  console.log("runtime", runtime);
  //obtener de la cookie vtex_segment
  const condition = segmentValue === "2";

  if (segmentParameter === "productClusterIds") {
    return <>{condition && children}</>;
  }

  return <></>;
};

export default ConditionalSegmentBlock;
