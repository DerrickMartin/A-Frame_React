import React from "react";
import "aframe-environment-component";

// See https://www.npmjs.com/package/aframe-environment-component

export default props => {
  var environment = props.environment || {};
  environment.preset = environment.preset || "default";
  var environmentString = "preset: japan";
  return <a-entity environment={environmentString} />;
};
