"use strict";
import * as React from "react";
const SW = require("../../");
let Greet = (props) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("style", {
  dangerouslySetInnerHTML: { __html: SW.processSWScript(props.code || "") }
}));
export default Greet;
