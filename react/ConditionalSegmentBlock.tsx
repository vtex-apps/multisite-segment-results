import type { FC } from "react";
import React from "react";
// import { useRuntime } from "vtex.render-runtime";
import type { Runtime } from './typings/global';
import atob from 'atob';

type Props = {
  segmentParameter: string;
  segmentValue: number;
};

declare let window: {
  __RUNTIME__: Runtime
};

const ConditionalSegmentBlock: FC<Props> = ({
  segmentParameter,
  segmentValue,
  children,
}) => {
  //obtener de la cookie vtex_segment
  const segmentToken = window?.__RUNTIME__?.segmentToken;
  const segmentTokenInfo = JSON.parse(atob(segmentToken));

  let segmentFacet = (segmentTokenInfo.facets).split("=");
  let facetParameter = segmentFacet[0];
  let facetParameterId = segmentFacet[1].split(";")[0];

  console.log("segmentTokenInfo", segmentTokenInfo);
  console.log("segmentValue", segmentParameter);
  console.log("segmentValue", segmentValue);
  console.log("segment Facet", segmentFacet);
  console.log("segment Facet parameter:", facetParameter);
  console.log("segment Facet parameterId:", facetParameterId);

  const defaultBanner = segmentValue === 137;

  if (facetParameter === "null") {
    return <>{defaultBanner && children}</>;
  }

  const condition = segmentValue == facetParameterId;

  if (segmentParameter === facetParameter) {
    return <>{condition && children}</>;
  }

  return <></>;
};

export default ConditionalSegmentBlock;
