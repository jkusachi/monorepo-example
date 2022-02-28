import React from "react";
import ReactDOM from "react-dom";
import commonFunction, { getName } from "@demo/common";

ReactDOM.render(<h1>Hello world! - {getName()}</h1>, document.getElementById("root"));
