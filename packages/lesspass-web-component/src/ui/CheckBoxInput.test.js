import React from "react";
import ReactDOM from "react-dom";
import CheckBoxInput from "./CheckBoxInput";

it("CheckBoxInput renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CheckBoxInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
