import React from "react";
import ReactDOM from "react-dom";
import HelpPage from "./HelpPage";

it("HelpPage renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HelpPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
