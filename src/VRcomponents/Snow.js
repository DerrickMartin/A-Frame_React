import React from "react";
import { Entity } from "aframe-react";

export default props => (
  <Entity
    particle-system={{
      preset: props.preset || "snow",
      particleCount: props.particleCount || 5000
    }}
  />
);
