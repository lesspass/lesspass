import React from "react";
import ReactDOM from "react-dom";
import PasswordGenerationPage from "./PasswordGenerationPage";

it("PasswordGenerationPage renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PasswordGenerationPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
