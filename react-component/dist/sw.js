"use strict";
import * as React from "react";
const SW = require("../../");
let Greet = (props) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Hello, world2!! ", props.name), /* @__PURE__ */ React.createElement("style", {
  dangerouslySetInnerHTML: { __html: SW.processSWScript(props.str || "") }
}));
export default Greet;
