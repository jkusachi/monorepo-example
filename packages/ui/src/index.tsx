import React from "react";
import ReactDOM from "react-dom";

import { outputName } from "@demo/common";

import { Button } from "@demo/components";

ReactDOM.render(
  <div>
    <h1>Hello world! It's a beautiful day.</h1>
    <h3>{outputName("James Kusachi")}</h3>
    <Button text="ahoy there" />
  </div>,
  document.getElementById("root")
);
