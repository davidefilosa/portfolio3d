import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canval-load"></span>
      <p>{progress.toFixed(0)}%</p>
    </Html>
  );
};

export default Loader;
