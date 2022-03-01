import React from "react";
import ReactDOM from "react-dom";

import { outputName } from "@demo/common";

export function Button({ text = "no text set" }) {
  return <button>{text}</button>;
}

ReactDOM.render(
  <div>
    <h1>Hello world! It's a beautiful day.</h1>
    <Button />
  </div>,
  document.getElementById("root")
);
